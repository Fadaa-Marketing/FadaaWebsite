import React from 'react'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { FaArrowRight } from 'react-icons/fa'
import { JobsData } from '@/types'
import Link from 'next/link'

const JobAllDetails = ({positions}:JobsData) => {
  return (
    <div>
      <Dialog>
      <DialogTrigger className='main-button flex items-center gap-2 w-fit px-7 py-4 place-self-end'> View Details <FaArrowRight /> </DialogTrigger>
      
      <DialogContent>
        <DialogHeader className='p-10 flex flex-row items-center gap-3'>
          <DialogTitle className='text-[35px] uppercase font-medium '>{positions.title}</DialogTitle>
          <DialogClose asChild>
          <Link href={'#applyForm'} className='main-button flex items-center gap-2 w-fit px-7 py-4'> Apply Now <FaArrowRight />  </Link>
          </DialogClose>
          
        </DialogHeader>
        <div className='my-10 mx-14'>
        <DialogDescription>
            {positions.qualifications}
          </DialogDescription>
        </div>
        
      </DialogContent>
    </Dialog>
    </div>
  )
}

export default JobAllDetails
