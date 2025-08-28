import React from 'react';
import { JobsFormFields } from './JobsFormFields';
import { JobItem } from '@/types/index';

interface ApplyFormProps {
  selectJob: JobItem[];
}

const ApplyForm = ({ selectJob }: ApplyFormProps) => {
  return (
    <div 
      id='applyForm' 
      className='border rounded-3xl bg-gradient-to-r from-[#590997] to-primary flex flex-col items-center justify-center w-full p-6 md:p-12'
    >
      <div className='w-full lg:w-1/2'>
        <h2 className='text-center text-[30px] mb-10 capitalize'>Submit your application</h2>
        <JobsFormFields jobOptions={selectJob} />
      </div>
    </div>
  );
};

export default ApplyForm;