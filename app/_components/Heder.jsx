
"use client"
import React from 'react'
import Image  from 'next/image'
import {UserButton, useUser} from '@clerk/nextjs' 



function heder() {
  const {User, isSignedIn} = useUser();

  return (
    <div className='p-1 shadow-sm '>
        <div className=' flex items-center justify-between'>
        <Image src = {'./logo.svg'} width = {100} height=  {20} alt = 'logo'/>

        {isSignedIn?
          <dev className = "flex items-center gap-5">
            <button className="btn hover:*:">DashBoard</button>
            <UserButton/>
          </dev>:
        <button className="btn hover:*:">Get Started</button>
        }
        </div>
     

    </div>
  )
}

export default heder