import Image from 'next/image'
import React from 'react'
import { MdArrowOutward } from 'react-icons/md'
import { jobcardtype } from './CompanyCard'

export default function JobtypeCard({ icon, title, jobUrl }: jobcardtype) {
  return (
    <div className="p-3 group cursor-pointer rounded-2xl bg-lightGrey 
        flex items-center justify-between gap-4 
        md:p-4 md:rounded-3xl 3xl:max-h-[115px] 3xl:p-6 
        w-full md:w-auto">
      
      {/* Image and Title (Inline) */}
      <div className="flex items-center gap-3">
        <Image
          className="size-[30px] md:size-[40px] 2xl:size-[50px] cursor-pointer"
          src={icon}
          width={50}
          height={50}
          alt="company-icons"
        />
        <h3 className="text-sm md:text-base 3xl:text-lg font-medium">{title}</h3>
      </div>

      {/* Arrow Button */}
      <div className="arrow bg-white group-hover:bg-black size-6 md:size-8 2xl:size-10 rounded-full grid place-items-center">
        <MdArrowOutward className="text-black group-hover:text-white size-3 md:size-4 2xl:size-5" />
      </div>
    </div>
  );
}
