'use client';

import { allCertificates } from '@/.content-collections/generated';

import CertificateCard from './certificate-card';

const CertificatesList = () => {
  const certificates = allCertificates
    .filter((cert) => cert.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  console.log('Total certificates:', allCertificates.length);
  console.log('Published certificates:', certificates.length);
  console.log(
    'Certificate titles:',
    certificates.map((c) => c.title),
  );

  if (certificates.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <p className="text-muted-foreground">No certificates yet.</p>
      </div>
    );
  }

  return (
    <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {certificates.map((certificate) => (
        <CertificateCard key={certificate._id} certificate={certificate} />
      ))}
    </div>
  );
};

export default CertificatesList;
