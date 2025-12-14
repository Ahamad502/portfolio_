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
    async signIn({ account }) {
      if (account?.provider === 'google' || account?.provider === 'github') {
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
