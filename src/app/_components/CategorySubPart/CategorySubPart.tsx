import { getAllCategories } from '_/api/services/route.services'
import Link from 'next/link'
import React from 'react'
import { IoMdArrowForward } from "react-icons/io";

export default async function CategorySubPart() {


    const allCategories= await getAllCategories();
  return (
    <div className='p-10'>
      <div className='flex items-center justify-between py-5'>
        <div className='flex items-center'>
        <span className="w-2 h-10 bg-gradient-to-b from-rose-400 to-pink-500 rounded-t rounded-b"></span>

        <h2 className='text-[30px] font-bold    pl-4  text-[#1E2939] '>Shop By <span className='text-rose-400'>Category</span></h2>
        </div>
         <Link href="/categories" className='text-[16px] text-rose-400 flex items-center '>View All Categories <IoMdArrowForward className='ml-1' color='#FB7185'/> </Link>

      </div>

      <div className='grid grid-cols-6 gap-5'>
        {allCategories?.map(category => <div key={category._id} className='rounded-lg flex items-center justify-center flex-col shadow-lg hover:shadow-xl  p-3'>
            <img src={category.image} alt={category.name} className='rounded-full w-20 h-20' />
            <h3>{category.name}</h3>

        </div> )}
      </div>
    </div>
  )
}
