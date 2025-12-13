import { withContentCollections } from '@content-collections/next';
import MillionLint from '@million/lint';
import { withSentryConfig } from '@sentry/nextjs';
import type { NextConfig } from 'next';

import appHeaders from './config/next/headers';
import redirects from './config/next/redirects';

const SentryWebpackPluginOptions = { silent: true };

const isDevelopment = process.env.NODE_ENV === 'development';

const nextConfig: NextConfig = {
  compress: true,
  reactStrictMode: true,
  crossOrigin: 'anonymous',
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  images: {
    remotePatterns: [
      // google avatar
      { hostname: 'lh3.googleusercontent.com' },
      // github avatar
      { hostname: 'avatars.githubusercontent.com', protocol: 'https' },
      { hostname: 'i.scdn.co' },
      { hostname: 'spotify.com' },
      { hostname: 'res.cloudinary.com' },
      { hostname: 'ui-avatars.com' },
    ],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|mp4)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next',
            name: 'static/media/[name].[hash].[ext]',
          },
        },
      ],
    });
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  async headers() {
    return appHeaders;
  },
  async redirects() {
    return redirects;
  },
};

const millionConfig = {
  mute: true,
  // auto: { rsc: true },
  rsc: true,
};

// Only apply Sentry config if DSN is available
const hasSentryDSN =
  process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;

export default isDevelopment
  ? withContentCollections(MillionLint.next(millionConfig)(nextConfig))
  : hasSentryDSN
    ? withContentCollections(
        MillionLint.next(millionConfig)(
          withSentryConfig(nextConfig, SentryWebpackPluginOptions),
        ),
      )
    : withContentCollections(MillionLint.next(millionConfig)(nextConfig));
