import React from 'react';
import { WireframeSphere } from '@/components/wireframe';
import { mono } from '@/lib/font';
import { Button } from '@/components/button';
import { StatusMarquee, TopMarquee } from '@/components/marquee';
import { NextSeo } from 'next-seo';
 
export default function Home() {
  return (
    <React.Fragment>
      <NextSeo 
        title="Mango Community"
        description="Friendly non-toxic gaming community!"
      />
      <div>
        <div className="fixed noise"></div>
        <div className="pt-2">
          <TopMarquee />
        </div>
        <div className="flex items-center w-full flex-wrap-reverse py-0 lg:flex-wrap justify-center">
          <div className="flex flex-col gap-5 px-4">
            <h1 className="text-[50px] alpha lg:w-[500px] font-medium dark:text-[#fff]">
              Think Game, Think
              <span className="gradient ml-4 px-2  text-[#0e0e0e]">MANGO!</span>
            </h1>
            <p className={`pl-2 ${mono.className}`}>
              - Friendly gaming community
              <br></br>- Fun giveaways
              <br></br>- Open for all players
            </p>
            <div className="flex justify-center items-center w-full lg:justify-start">
              <Button
                text="JOIN NOW"
                onClick={() => {
                  window.open('https://discord.gg/bPFgvVYfXR');
                }}
              />
            </div>
          </div>
          <WireframeSphere className="" />
        </div>

        <div className="pt-6 md:pt-24 lg:pt-0 ">
          <StatusMarquee />
        </div>
      </div>
    </React.Fragment>
  );
}
