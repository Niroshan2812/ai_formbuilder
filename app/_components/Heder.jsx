"use client";
import React from "react";
import Image from "next/image";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";



function heder() {
  const { User, isSignedIn } = useUser();

  return (
    <div className="p-1 shadow-sm ">
      <div className=" flex items-center justify-between">
        <Image src={"./logo.svg"} width={100} height={20} alt="logo" />

        {isSignedIn ? (
          <dev className="flex items-center gap-5">
            
          <Link href={'./dashboard'}>
          <button className="btn hover:*:">DashBoard</button>
          </Link>
           
            
            <UserButton />
          </dev>
        ) : (
          <SignInButton>
            <button className="btn hover:*:">Get Started</button>
          </SignInButton>
        )}
      </div>
    </div>
  );
}

export default heder;
