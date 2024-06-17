import React from 'react'
import Image  from 'next/image'
import { Button } from '@/components/ui/button'
function heder() {
  return (
    <div className='p-1 shadow-sm '>
        <div className=' flex items-center justify-between'>
        <Image src = {'./logo.svg'} width = {100} height=  {20} alt = 'logo'/>

        <Button> Get Started</Button>

        </div>
     

    </div>
  )
}

export default heder