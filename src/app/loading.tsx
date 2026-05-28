import React from 'react'
import { BounceLoader} from 'react-spinners'

export default function loading() {
  return (
    <div className='flex items-center justify-center h-screen'>
     <BounceLoader color="pink" />
    </div>
  )
}

