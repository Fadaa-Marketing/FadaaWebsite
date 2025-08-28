import React from 'react';
import Sidebar from './Sidebar';
import ApplyForm from './ApplyForm';
import { getSelectedJob } from "@/lib/api";
import { JobItem } from '@/types/index';

const Opportunities = async ({ jobsCategory }: any) => {
  const { success, data } = await getSelectedJob();
  const selectJob: JobItem[] = success && Array.isArray(data) ? data : [];
  
  return (
    <div className='main-padding' id='opportunity'>
      <div className='flex flex-col gap-6 justify-center text-center'>
        <h2 className='secondary-title'>Current Opportunities</h2>
        <p className='main-text'>
          Explore our open positions and find the perfect launchpad for your next career adventure in the marketing cosmos.
        </p>
      </div>
      <div className='my-14'>
        <Sidebar jobsCategory={jobsCategory} />
      </div>
      <ApplyForm selectJob={selectJob} />
    </div>
  );
};

export default Opportunities;