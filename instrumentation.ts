import * as Sentry from '@sentry/nextjs';

export async function register() {
  const SENTRY_DSN =
    process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;

  Sentry.init({
    dsn: SENTRY_DSN,
    tracesSampleRate: 0.2,
    // Disable Sentry during development
    enabled: process.env.NODE_ENV === 'production',
  });
}

// Export request error hook for error instrumentation
export const onRequestError = Sentry.captureRequestError;
