import { Trash, Edit } from 'lucide-react'
import React, { useState } from 'react'
import {Popover, PopoverTrigger, PopoverContent} from "@nextui-org/popover";

function FieldEdit({defaultValue, ontimeupdate}) {

  const [label, setLabel] =useState(defaultValue?.label);
  const[placeholder,setPlaceHolder] = useState(defaultValue?.placeholder);

  return (
    <div className="flex gap-2">
      <Popover placement="bottom" className="bg-red-300 " offset={20} showArrow>
        <PopoverTrigger>
          <Edit className="h-4 w-5 text-gray-500" />
        </PopoverTrigger>
        <PopoverContent>
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
          <button className='px-1 py-1 ml-1 bg-slate-400 text-slate-50 border text-base 
          '
          onClick={()=>ontimeupdate({
            label:label,
            placeholder:placeholder
          })}
          >Update </button>
          </div>
        
        </PopoverContent>
      </Popover>

      <Trash className="h-4 w-5 text-red-500" />
    </div>
  );
}

export default FieldEdit