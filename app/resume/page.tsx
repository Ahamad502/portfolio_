import { redirect } from 'next/navigation';

const ResumePage = () => {
  redirect('/share/resume.pdf');
};

export default ResumePage;
