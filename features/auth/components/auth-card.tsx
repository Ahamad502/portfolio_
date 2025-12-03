'use client';

import { useSearchParams } from 'next/navigation';
import type { BuiltInProviderType } from 'next-auth/providers/index';
import type { ClientSafeProvider, LiteralUnion } from 'next-auth/react';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

import ProviderButton from './provider-button';

const AuthCard = ({
  providers,
}: {
  providers: Record<
    LiteralUnion<BuiltInProviderType>,
    ClientSafeProvider
  > | null;
}) => {
  const [isShowError, setIsShowError] = useState(false);
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') ?? '/';

  useEffect(() => {
    setIsShowError(searchParams.has('error'));
  }, [searchParams]);

  // Check if providers are actually configured
  const hasValidProviders = providers && Object.keys(providers).length > 0;

  return (
    <>
      <div className="flex flex-col items-center justify-items-center space-y-2 will-change-[transform,opacity] xl:space-y-0">
        {!hasValidProviders ? (
          <div className="bg-card border-border w-full max-w-md space-y-4 rounded-lg border p-6 text-center">
            <div className="text-warning space-y-2">
              <h3 className="font-cal text-lg font-bold">
                ⚠️ OAuth Setup Required
              </h3>
              <p className="text-muted-foreground text-sm">
                The portfolio owner hasn't configured OAuth providers yet. Login
                features are temporarily disabled.
              </p>
            </div>

            <div className="bg-muted rounded p-4 text-left text-sm">
              <p className="mb-2 font-semibold">To enable login:</p>
              <ol className="list-inside space-y-1 text-xs">
                <li>1. Setup GitHub OAuth</li>
                <li>2. Update .env with credentials</li>
                <li>3. Restart dev server</li>
              </ol>
            </div>

            <a
              href="https://github.com/settings/developers"
              className="text-primary hover:text-primary/80 text-sm font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              → Setup GitHub OAuth
            </a>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-between gap-4">
            {Object.values(providers).map((provider) => (
              <ProviderButton
                key={provider.id}
                provider={provider}
                callbackUrl={callbackUrl}
              />
            ))}
          </div>
        )}
      </div>
      <Dialog open={isShowError} onOpenChange={setIsShowError}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              Oops! Something went wrong while authenticating your account.
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 text-center">
            <p className="text-muted-foreground">
              An unexpected problem occurred while I&apos;m trying to log you
              in. Please try with another providers.
            </p>
            <code className="bg-destructive/50 text-destructive-foreground rounded-lg p-2 font-mono text-sm">
              Error: {searchParams.get('error')}
            </code>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AuthCard;
