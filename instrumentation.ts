import * as Sentry from '@sentry/nextjs';

export async function register() {
  // Only initialize Sentry if DSN is provided and we're in production
  const SENTRY_DSN =
    process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;

  if (SENTRY_DSN && process.env.NODE_ENV === 'production') {
    Sentry.init({
      dsn: SENTRY_DSN,
      tracesSampleRate: 0.2,
    });
  }
}

// Export request error hook for error instrumentation
export const onRequestError = Sentry.captureRequestError;
