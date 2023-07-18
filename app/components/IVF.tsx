import Image from 'next/image'
import { Roboto } from 'next/font/google'


const roboto = Roboto({
    weight: '400',
    subsets:['latin'],
})
    
export default function IVF() {
    return (
     <Image
     src="/IVF.svg"
     alt="iv future"
     width={99}
     height={40}
    
        />
    )
    
}



