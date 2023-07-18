'use client'

import Image from 'next/image'
import { Roboto } from 'next/font/google'
import IVF from './IVF'
import React, { useRef } from 'react';
import Form2 from './Content/Form2';


const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})



export default function Header() {
  const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

  function scrollToTop() {
      if (!isBrowser()) return;
      window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  function scrollToBot() {
    if (!isBrowser()) return;
    window.scrollTo({ top:document.documentElement.scrollHeight, behavior: 'smooth' });
}
function scrolltosecond() {
  if (!isBrowser()) return;
  window.scrollTo({ top:850, behavior: 'smooth' });
}
function scrolltothird() {
  if (!isBrowser()) return;
  window.scrollTo({ top:1650, behavior: 'smooth' });
}
function scrolltoForth() {
  if (!isBrowser()) return;
  window.scrollTo({ top:4250, behavior: 'smooth' });
}

  return (


        <header className=" IPAD:sticky IPAD:top-0 IPAD:z-0  sticky top-0 z-10 flex  w-full pl-36 pt-2.5 pb-2.5 bg-white pr-36">
        <IVF/>

        <div className="w-full ml-96 grid gap-2 grid-cols-6 items-center text-black">
  <button className=" text-orange-500"onClick={scrollToTop} >  HOME

  </button>

  <button className="" onClick={scrollToTop}>

    ABOUT 

    </button>
  <button className="" onClick={scrolltosecond}>OUR CLASES</button>
  <button  className="" onClick={scrolltothird}>LESSONS</button>
  <button className="" onClick={scrolltoForth}>PROJECTS</button>
  <button className="" onClick={scrollToBot}>CONTACT US</button>

</div>


        </header>




  )

};



  

