import { Trash, Edit } from 'lucide-react'
import React from 'react'

function FieldEdit() {
  return (
    <div className='flex gap-2'>
        <Edit className='h-4 w-5 text-gray-500'/>
        <Trash className='h-4 w-5 text-red-500'/>
    </div>
  )
}

export default FieldEdit