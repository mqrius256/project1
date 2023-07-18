'use client'
import Image from 'next/image'
import { Mukta, Roboto } from 'next/font/google'
import Link from 'next/link';
import { useState , FormEvent  } from 'react';

const roboto = Mukta({
  weight: '800',
  subsets: ['latin'],
})

export default function Form7() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const validateForm = () => {
    let isValid = true;

  };

  return (


<div className=' bg-white w-full h-[800px]'>



        <div className=' lg:ml-[400px] mt-[48px] ml-[800px] text-black flex w-[734px] flex-col flex-shrink-0 text-[40px] font-extrabold not-italic leading-5'>
        Contact us 
        </div>
        <div className=' lg:ml-[400px] text-[#6B7280;] mt-8 ml-[800px] flex w-[509px] flex-col flex-shrink-0 text-[16px] not-italic font-normal leading-7'>
        Gain hands-on experience and delve into the intricacies of web development as you work on real-world projects.
        </div>


        <div className='flex mt-[51px]'>
            <div className=' IPAD:ml-[100px]   ml-[700px] lg:ml-[300px]   bg-[#FDF1DC] w-[470px] h-[463px] rounded-2xl'>
              <div className='ml-[40px] mt-[40px] text-black text-[29px] not-italic font-semibold leading-6'>
              Contact Information
              </div>

              <div className=' flex text-[16px] not-italic font-normal leading-7 text-black mt-[56px] '>
             <div>
             <Image
        className=" ml-[40px]"
        src="/phone.svg" 
        alt="iv future" 
        width={24}
        height={24}


        /> 
             </div>
             <div className='ml-[25px]'>
              +40 233 433 933
              </div>
              </div>


            <div className=' mt-[21px]  w-[337px] h-[196px]'>
              <div className=' flex mt-[29px] text-black'>
              <div>
             <Image
        className=" ml-[40px]"
        src="/mail.svg" 
        alt="iv future" 
        width={24}
        height={24}


        /> 
             </div>
             <div className='ml-[25px]'>
                academy@ivfuture.uk
                </div>
              </div>
              <div className='w-[300px] flex  flex-shrink-0 text-black mt-[50px]  text-[14px] font-normal not-italic leading-6'>

              <Image
        className=" ml-[40px]"
        src="/location.svg" 
        alt="iv future" 
        width={24}
        height={24}


        />
        <div className='ml-[25px]'> 
              Portului Nr. 7, 800032, 
Galati, Galati Romania

</div>
              </div>
            </div>
              <div className=' flex gap-6 '>

          <Link target='_blank' href="https://www.facebook.com/IVFutureSRL/">

              <button className='  bg-[#F29F0524] ml-[59px]  w-[40px] h-[40px] flex-shrink-0  rounded-full '>
              <Image
        className=" "
        src="/facebook.svg" 
        alt="iv future" 
        width={700}
        height={452}


        /> 
              </button>
              </Link>
              <Link target='_blank' href="https://www.instagram.com/ivfuture_ro/?hl=ro">
              <button className='  bg-[#F29F0524]   w-[40px] h-[40px] flex-shrink-0  rounded-full '>
              <Image
        className=" "
        src="/instagram.svg" 
        alt="iv future" 
        width={700}
        height={452}


        /> 

                </button>
                </Link>
                <Link href="https://twitter.com/IVFutureSRL">
              <button className='  bg-[#F29F0524]   w-[40px] h-[40px] flex-shrink-0  rounded-full '>

              <Image
        className=" "
        src="/twitter.svg" 
        alt="iv future" 
        width={700}
        height={452}


        /> 
                </button>
                </Link>
                <Link href="https://www.youtube.com/">
                <button className='  bg-[#F29F0524]   w-[40px] h-[40px] flex-shrink-0  rounded-full '>
                <Image
        className=" "
        src="/utube.svg" 
        alt="iv future" 
        width={700}
        height={452}


        /> 


                </button>
                </Link>
              </div>
            </div>

            <div className=' ml-[80px] mt-[75px] grid grid-cols-2 gap-x-[5px]'>



            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-[#8D8D8D] text-xs font-bold mb-2">
        First Name
      </label>
      <input className="appearance-none block w-[300px] text-[#8D8D8D]  border-b-2 border-[#8D8D8D] py-3 px-4 mb-3 " type="text" placeholder="Type your surname here"/>

    </div>


            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-[#8D8D8D] text-xs font-bold mb-2">
        Last name
      </label>
      <input className="appearance-none block w-[300px] text-[#8D8D8D]  border-b-2 border-[#8D8D8D] py-3 px-4 mb-3 " type="text" placeholder="Type your name here"/>

    </div>

            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-[#8D8D8D] text-xs font-bold mb-2">
        Email
      </label>
      <input className="appearance-none block w-[300px] text-[#8D8D8D]  border-b-2 border-[#8D8D8D] py-3 px-4 mb-3 " type="email" placeholder="you@example.com"/>

    </div>

            <div className="w-full  px-3  mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-[#8D8D8D] text-xs font-bold mb-2">
        Phone number
      </label>
      <input className="appearance-none block w-[300px] text-[#8D8D8D]  border-b-2 border-[#8D8D8D] py-3 px-4 mb-3 " type="text" placeholder="Type your phone number here"/>

    </div>



            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-[#8D8D8D] text-xs font-bold mb-2">
        Message
      </label>
      <input className="appearance-none block w-[600px] text-[#8D8D8D]  border-b-2 border-[#8D8D8D] py-3 px-4 mb-3 " type="text" placeholder="Type your message here"/>

    </div>

            <div className='mt-[150px] '>

            <button className=' text-white  rounded-[8px]   flex  py-[16px] px-[48px] justify-center items-center gap-[10px] bg-orange-600   shadow-custom-shadow'>Enroll Now!  

      <Image
        className=" w-6 h-6"
        src="/Arrow.png" 
        alt="iv future" 
        width={104}
        height={102}


        />
      </button>


            </div>

            </div>




        </div>

    


</div>
  )
}