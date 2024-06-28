import { Trash, Edit } from 'lucide-react'
import React, { useState } from 'react'
import {Popover, PopoverTrigger, PopoverContent} from "@nextui-org/popover";

function FieldEdit({defaultValue, ontimeupdate, deleteField}) {

  const [label, setLabel] =useState(defaultValue?.label);
  const[placeholder,setPlaceHolder] = useState(defaultValue?.placeholder);

  return (
    <div className="flex gap-2">
      <Popover placement="bottom" className="bg-red-300 " offset={20} showArrow>
        <PopoverTrigger>
          <Edit className="h-4 w-5 text-gray-500" />
        </PopoverTrigger>
        <PopoverContent className="bg-white rounded-lg shadow-lg p-4 max-w-xs">
          <div className=''>
          <div className="px-1 py-2 ">
            <label className="text-base flex">Edit Field</label>
            <input
              type="text"
              className="text-sm text-slate-500 border mr-2 ml-3  "
              defaultValue={defaultValue.label}
              onChange={(e) => setLabel(e.target.value)}
            ></input>
          </div>
          <div className="px-1 py-2 ">
            <label className="text-base flex ">Edit placeholder</label>
            <input
              type="text"
              className="text-sm text-slate-500 border mr-1 ml-3  "
              defaultValue={defaultValue.placeholder}
              onChange={(e) => setPlaceHolder(e.target.value)}
            ></input>
          </div>
          <button className='px-4 py-2 bg-lime-600 rounded-md text-sm font-medium  hover:bg-lime-500 text-slate-50 
          '
          onClick={()=>ontimeupdate({
            label:label,
            placeholder:placeholder
          })}
          >Update </button>
          </div>
        
        </PopoverContent>
      </Popover>

<div>
<Popover placement="bottom" offset={20} showArrow>
      <PopoverTrigger>
      <Trash className="h-m w-5 text-red-500" />
      </PopoverTrigger>
      <PopoverContent className="bg-white rounded-lg shadow-lg p-4 max-w-xs">
        <div className="px-1 py-2 ">
          <div className="text-sm mb-3 font-semibold">Are you sure you need to delete this? </div>
          <div className="text-sm text-rose-700 ">This action can't be undone. This will permanatly delete and remove your data from our server </div>
          <div className='mt-4 flex justify-end gap-2'>
          <button className="px-4 py-2 bg-gray-600 rounded-md text-sm font-medium text-slate-50 hover:bg-gray-500">
                  Cancel
                </button>
                <button className="px-4 py-2 bg-red-600 rounded-md text-sm font-medium
                 text-white hover:bg-red-400"
                 onClick={()=> deleteField()}
                 >
                  Proceed
                </button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
</div>
     
    </div>
  );
}

export default FieldEdit