

import { CiMail } from 'react-icons/ci'
import { FaGift, FaPhoneAlt } from 'react-icons/fa'
import { MdLocalShipping } from 'react-icons/md'


import IsAuthHeader from './IsAuthHeader'

export default async function Header() {

 
  return (
    <div className="py-2 px-2 mx-4 flex items-center justify-between  ">
          <div className="flex items-center gap-6">
            <p className="flex items-center gap-1 text-[13px] text-gray-500 hover:text-rose-400"><MdLocalShipping className="text-rose-400" />Free Shipping on Orders 500 EGP</p>
            <p className="flex items-center gap-1 text-[13px] text-gray-500 hover:text-rose-400"><FaGift  className="h-3 w-3 text-rose-400"/>New Arrivals Daily</p>

          </div>


          


          <div className="flex items-center gap-5">
             <a className="flex items-center gap-1 text-[13px] text-gray-500 hover:text-rose-400"><FaPhoneAlt  className="h-3 w-3 text-rose-400" /> +1 (800) 123-4567</a>
            <p className="flex items-center gap-1 border-r-2 border-rose-400 pr-4 text-[13px] text-gray-500 hover:text-rose-400"><CiMail  className="text-rose-400"/>support@freshcart.com</p>


       <IsAuthHeader/>
           

          </div>

        </div>
  )
}
