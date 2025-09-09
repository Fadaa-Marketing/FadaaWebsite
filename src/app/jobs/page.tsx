import React from 'react'
import HeroSection from './components/HeroSection'
import Team from './components/Team'
import Opportunities from './components/opportunity/Opportunities'
import Socials from './components/Socials'
import FormSection from '../components/shared/FormSection'
import {getJobsCategory , getSocialImages ,getContactData} from "@/lib/api"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fadaa Marketing | Jobs",
  description:
    "We come from space to guide brands across the ever-expanding marketing universe",
};

const page = async ()  => {
  const jobsCategory = await getJobsCategory()
  const socialImages = await getSocialImages()
  const socialLinks = await getContactData();
  const socialData = socialLinks?.social_links ;
  return (
    <div className='bg-primary'>
      <h1 className="hidden"> Jobs</h1>
      <HeroSection/>
      <Team  />
      <Opportunities jobsCategory={jobsCategory}/>
      <Socials socialData={socialData} socialImages={socialImages}/>
    </div>
  )
}

export default page
