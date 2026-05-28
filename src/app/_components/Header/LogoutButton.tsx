'use client'

import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'


import { PiSignOutFill } from 'react-icons/pi'


export default function LogoutButton() {
  const Navigate=  useRouter()
  async  function handleLogout(){
        await signOut({redirect:false})
        Navigate.push("/login")

    }

  return (
     <span onClick={handleLogout} className="flex items-center gap-1 text-[13px] text-gray-500 hover:text-rose-400 cursor-pointer"><PiSignOutFill  className="text-rose-400"/>LogOut</span>
  )
}
