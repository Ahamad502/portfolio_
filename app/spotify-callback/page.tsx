'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import Container from '@/components/container';

export default function SpotifyCallback() {
  const searchParams = useSearchParams();
  const [code, setCode] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const authCode = searchParams.get('code');
    const authError = searchParams.get('error');

    if (authError) {
      setError(authError);
    } else if (authCode) {
      setCode(authCode);
    }
  }, [searchParams]);

  return (
    <Container className="flex min-h-[50vh] flex-col items-center justify-center text-center">
      <div className="max-w-2xl space-y-6">
        <h1 className="text-2xl font-bold">Spotify Authorization</h1>

        {error ? (
          <div className="text-red-600">
            <h2 className="mb-2 text-lg font-semibold">Authorization Failed</h2>
            <p>Error: {error}</p>
          </div>
        ) : code ? (
          <div className="text-green-600">
            <h2 className="mb-4 text-lg font-semibold">
              ✅ Authorization Successful!
            </h2>
            <div className="rounded-lg bg-gray-100 p-4">
              <p className="mb-2 text-sm text-gray-600">
                Copy this authorization code:
              </p>
              <code className="block rounded border bg-white p-2 text-sm break-all text-gray-800">
                {code}
              </code>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              Copy the code above and provide it to complete your Spotify setup.
            </p>
          </div>
        ) : (
          <div>
            <h2 className="mb-2 text-lg font-semibold">
              Waiting for authorization...
            </h2>
            <p className="text-gray-600">
              Please complete the Spotify authorization process.
            </p>
          </div>
        )}
      </div>
    </Container>
  );
}
