import Image from 'next/image'
import { Mukta, Roboto } from 'next/font/google'
import IVF from './IVF'

const roboto = Mukta({
  weight: '400',
  subsets: ['latin'],
})

export default function Footer() {
  return (


    
        <footer className="w-full flex items-center justify-between bg-gray-100  pr-36 pl-36">
          <div>
          <Image
        src="/IVF.svg" 
        alt="iv future" 
        width={99}
        height={40}

        />
          </div>



    <div className='${roboto.className} text-gray-500 text-xs items-center justify-center'>
     ©2023 IVFuture. All right reserved.
    </div>


        </footer>


  )
}
