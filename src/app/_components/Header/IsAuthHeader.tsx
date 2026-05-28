'use client'

import { useSession } from 'next-auth/react'
import Link from 'next/link';

import { CiUser } from 'react-icons/ci';
import { PiSignOutFill } from 'react-icons/pi';
import LogoutButton from './LogoutButton';

export default function IsAuthHeader() {

const session=useSession();
const username= session.data?.user?.name;
const isAuthenticated=session.status==="authenticated"
  return (
    <>
   
           {isAuthenticated?<>  
      <Link href="/profile" className="flex items-center gap-1 text-[13px] text-gray-500 hover:text-rose-400"><CiUser className="text-rose-400" />{username}</Link>
           <LogoutButton/>

           </>:<> <Link href="/login" className="flex items-center gap-1 text-[13px] text-gray-500 hover:text-rose-400"><CiUser className="text-rose-400" />SignIn</Link>
            <Link href="/register" className="flex items-center gap-1 text-[13px] text-gray-500 hover:text-rose-400"><PiSignOutFill  className="text-rose-400"/>SignUp</Link></>}
            </>
  )
}
