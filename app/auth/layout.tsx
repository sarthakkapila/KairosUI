import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/dist/server/api-utils';
import React from 'react';
import Image from 'next/image';

type Props = {
  children: React.ReactNode;
}

const Layout = async({ children }: Props) => {
  const user = await currentUser();
   if (user) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }  return (
    <> 
      <div className="h-screen text-white flex flex-col justify-center items-center w-full">
        <div className="flex flex-row items-center p-6">
          <Image
            src="/dark.ico"
            alt="LOGO"
            width={40}
            height={40}
          />
          <p className='pt-1 pl-2 text-4xl font-black'>KairosUI</p>
        </div>
        <div className="text-white flex flex-col items-center text-center">
          <h2 className="text-gravel md:text-4xl font-extralight">
            Hi, I’m KairosUI! <br/> AI Frontend Developer
          </h2>
        </div>
        <div className="text-white flex flex-col items-center w-full pt-8">
          {children}
        </div>
      </div>
    </>
  );
}

export default Layout;

