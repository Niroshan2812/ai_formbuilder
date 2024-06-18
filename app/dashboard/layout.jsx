"use client";

import { SignIn, SignedIn } from "@clerk/nextjs";
import React from "react";
import SideNav from './_components/SideNav'

function DashboardLayout({ children }) {
  return (
    <SignedIn>
      <dev>
        <div className='md:w-64 fixed'>
           <SideNav/>
        </div>
        <div className="md:ml-64">{children}</div>
      </dev>
    </SignedIn>
  );
}

export default DashboardLayout;
