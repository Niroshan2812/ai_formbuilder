import { Progress } from '@radix-ui/react-progress';
import { LibraryBig, LineChart, MessagesSquare, Shield } from 'lucide-react';
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react';



function SideNav() {
  const menuList = [
    {
      id: 1,
      name: 'My Form',
      icon: LibraryBig,
      path: '/dashboard'
    },
    {
      id: 2,
      name: 'Responses',
      icon: MessagesSquare,
      path: '/dashboard/responce'
    },
    {
      id: 3,
      name: 'Analytics',
      icon: LineChart,
      path: '/dashboard/analytics'
    },
    {
      id: 4,
      name: 'Upgrade',
      icon: Shield,
      path: '/dashboard/upgrade'
    }
  ];
const path = usePathname();
useEffect(()=>{
  console.log(path)
}, [path])
  return (
    <div className='h-screen shadow-md border'>
      <div className='p-5'>
        {menuList.map((menu) =>
           <h2
           key={menu.id}
           className={`flex items-center gap-3 p-4 mb-3 hover:bg-red-300 hover:text-white rounded-lg cursor-pointer
             text-gray-50 ${path == menu.path&& 'bg-primary text-white'}`}
         >
            <menu.icon />
            {menu.name}
          </h2>
        )}
      </div>
      <div className='fixed bottom-7 p-6 w-80'>
      <button className="btn w-70 bg-red-300 text-slate-50"> + Create Form</button>
      <div className='my-7'>
        
      <progress className="progress w-56 bg-red-300" value="10" max="100"></progress>
      <h2 className='text-slate-200 my-3'> <strong>2</strong> out of <strong>3</strong> file created</h2>

      <h2 className='text-slate-200 my-2 text-sm w-56'> Upgrade your plan to unlimited  frorm</h2>
      
      

      </div>
      </div>
    </div>
  );
}

export default SideNav;
