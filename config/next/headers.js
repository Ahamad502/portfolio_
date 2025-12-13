const ContentSecurityPolicy = `
  default-src 'self' vercel.live *.spotify.com;
  worker-src 'self' blob:;
  script-src 'self' 'unsafe-eval' 'unsafe-inline' cdn.vercel-insights.com vercel.live va.vercel-scripts.com open.spotify.com *.spotify.com *.spotifycdn.com *.scdn.co *.spotilocal.com;
  style-src 'self' *.googleapis.com 'unsafe-inline' 'unsafe-eval' open.spotify.com *.spotify.com *.spotifycdn.com *.scdn.co;
  img-src 'self' *.gstatic.com * blob: data: open.spotify.com *.spotify.com *.spotifycdn.com *.scdn.co i.scdn.co mosaic.scdn.co;
  object-src 'none';
  base-uri 'none';
  media-src 'self' *.scdn.co *.spotify.com *.spotifycdn.com open.spotify.com;
  connect-src * wss://*.spotify.com *.spotify.com *.spotifycdn.com *.scdn.co open.spotify.com;
  font-src 'self' *.gstatic.com data: open.spotify.com *.spotify.com *.spotifycdn.com *.scdn.co;
  frame-src 'self' open.spotify.com *.spotify.com;
  child-src 'self' open.spotify.com *.spotify.com;
`;

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\n/g, ''),
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains; preload',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
];

module.exports = [
  {
    source: '/(.*)',
    headers: securityHeaders,
  },
  {
    source: '/feed.xml',
    headers: [
      {
        key: 'Content-Type',
        value: 'application/rss+xml;charset=utf-8',
      },
    ],
  },
];
