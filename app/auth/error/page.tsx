'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import Container from '@/components/container';
import { Button } from '@/components/ui/button';

export default function AuthError() {
  const searchParams = useSearchParams();
  const error = searchParams.get('error');

  const getErrorMessage = (error: string | null) => {
    switch (error) {
      case 'Configuration':
        return 'There is a problem with the server configuration.';
      case 'AccessDenied':
        return 'Access was denied. You may not have the necessary permissions.';
      case 'Verification':
        return 'The verification token has expired or has already been used.';
      case 'OAuthCallback':
        return 'There was an error during the OAuth callback process.';
      case 'OAuthCreateAccount':
        return 'Could not create OAuth account in the database.';
      case 'EmailCreateAccount':
        return 'Could not create email account in the database.';
      case 'Callback':
        return 'There was an error in the OAuth callback handler route.';
      case 'OAuthAccountNotLinked':
        return 'OAuth account is not linked to any existing account.';
      case 'EmailSignin':
        return 'There was an error sending the email.';
      case 'CredentialsSignin':
        return 'Sign in failed. Check the details you provided are correct.';
      case 'SessionRequired':
        return 'Please sign in to access this page.';
      default:
        return 'An unexpected error occurred during authentication.';
    }
  };

  return (
    <Container className="flex min-h-[50vh] flex-col items-center justify-center text-center">
      <div className="max-w-md space-y-6">
        <div>
          <h1 className="mb-2 text-2xl font-bold text-red-600">
            Authentication Error
          </h1>
          <p className="text-gray-600">{getErrorMessage(error)}</p>
          {error && (
            <p className="mt-2 text-sm text-gray-500">
              Error code:{' '}
              <code className="rounded bg-gray-100 px-1">{error}</code>
            </p>
          )}
        </div>

        <div className="space-y-3">
          <Button asChild className="w-full">
            <Link href="/auth">Try Again</Link>
          </Button>
          <Button asChild variant="ghost" className="w-full">
            <Link href="/">Go Home</Link>
          </Button>
        </div>
      </div>
    </Container>
  );
}
