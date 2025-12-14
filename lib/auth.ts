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
            checks: 'none',
          }),
        ]
      : []),
    ...(env.GOOGLE_ID && env.GOOGLE_SECRET
      ? [
          GoogleProvider({
            clientId: env.GOOGLE_ID,
            clientSecret: env.GOOGLE_SECRET,
            authorization: {
              params: {
                scope: 'openid email profile',
              },
            },
          }),
        ]
      : []),
  ],
  pages: {
    signIn: '/auth',
  },
  callbacks: {
    session: async ({ session, user }) => {
      session.id = user.id;
      return Promise.resolve(session);
    },
  },
};
