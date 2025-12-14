import { PrismaAdapter } from '@next-auth/prisma-adapter';
import type { NextAuthOptions } from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';

import env from '@/env';

import prisma from './db';

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  secret: env.NEXTAUTH_SECRET,
  providers: [
    ...(env.GITHUB_ID && env.GITHUB_SECRET
      ? [
          GitHubProvider({
            clientId: env.GITHUB_ID,
            clientSecret: env.GITHUB_SECRET,
          }),
        ]
      : []),
    ...(env.GOOGLE_ID && env.GOOGLE_SECRET
      ? [
          GoogleProvider({
            clientId: env.GOOGLE_ID,
            clientSecret: env.GOOGLE_SECRET,
          }),
        ]
      : []),
  ],
  pages: {
    signIn: '/auth',
    error: '/auth/error',
  },
  callbacks: {
    async signIn({ account, profile, user: _user }) {
      // Handle OAuth account linking
      if (account?.provider === 'google' || account?.provider === 'github') {
        if (profile?.email) {
          try {
            // Check if user with this email already exists
            const existingUser = await prisma.user.findUnique({
              where: { email: profile.email },
              include: { accounts: true },
            });

            // If user exists but doesn't have this provider linked, link it
            if (
              existingUser &&
              !existingUser.accounts.some(
                (acc) => acc.provider === account.provider,
              )
            ) {
              await prisma.account.create({
                data: {
                  userId: existingUser.id,
                  type: account.type,
                  provider: account.provider,
                  providerAccountId: account.providerAccountId,
                  refresh_token: account.refresh_token,
                  access_token: account.access_token,
                  expires_at: account.expires_at,
                  token_type: account.token_type,
                  scope: account.scope,
                  id_token: account.id_token,
                  session_state: account.session_state,
                },
              });
            }
          } catch (error) {
            console.error('Error linking account:', error);
          }
        }
        return true;
      }
      return true;
    },
    async session({ session, user }) {
      if (user) {
        session.id = user.id;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
  },
};
