import type { Metadata } from 'next';

import Container from '@/components/container';
import PageHeader from '@/components/page-header';
import CertificatesList from '@/features/certificates/components/certificates-list';
import { seo } from '@/lib/meta';
import { cn } from '@/lib/utils';

export const metadata: Metadata = seo({
  title: 'Certificates',
  description: 'Professional certificates and course completions',
  url: '/certificates',
});

const CertificatesPage = () => {
  return (
    <div className={cn('flex flex-col')}>
      <PageHeader
        title="Certificates"
        description="Professional certifications and course completions from industry-leading platforms"
      />
      <Container className={cn('gap-8')}>
        <CertificatesList />
      </Container>
    </div>
  );
};

export default CertificatesPage;
