/* This example requires Tailwind CSS v2.0+ */
import Image from 'next/image'
import {
    AcademicCapIcon,
    AtSymbolIcon,
    BellIcon,
    ArrowRightIcon,
} from '@heroicons/react/outline'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const features = [
  { icon:AcademicCapIcon, 
    name: '1. Analysis & Research',
  },
  { icon:AtSymbolIcon, 
    name: '2. Execution',
  },
  { icon:BellIcon, 
    name: '3. Launch', 
  },
  
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Process() {
    useEffect(()=> {
        AOS.init();
    }, [])
  return (
    <div 
        data-aos="fade-up"
        data-aos-duration="1000"
        className="relative max-w-6xl py-12 mx-auto bg-gray-100"
    >
      <main className="lg:relative">
        <div className="flex flex-col py-5">
          <div className="flex flex-col items-center justify-center px-4 sm:px-8">
            <h1 className="flex max-w-lg text-5xl tracking-tight font-semibold text-center leading-tight text-black">
                A simple yet powerful and efficient process
            </h1>
            <p className="py-4 text-base max-w-lg text-gray-900 text-center">
                Lorem Ipsum is ahsshasimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
            </p>
          </div>

          <div className="flex py-8 px-4 lg:px-24">
            <div className='w-full flex flex-col-reverse md:flex-row md:space-x-8'>
                <div className='w-full md:w-1/2 flex items-center mt-12 md:mt-0'>
                    <Image
                    src="/section.jpg"
                    alt="Bitmotto"
                    width="1320"
                    height="1024"
                    className="h-auto w-auto rounded-2xl"
                    />
                </div>
                <div className='w-full md:w-1/2 flex flex-col md:justify-center'>
                    {features.map((feature) =>(
                        <div className="flex py-3 rounded-2xl" key={feature.name}>
                            <span className='flex flex-col xs:flex-row xs:items-center space-y-3 xs:space-y-0 py-4 px-6 w-full bg-white rounded-md'>
                                <p className='p-3 w-12 bg-black rounded-full mr-4'> 
                                    <feature.icon className='h-6 w-6 text-white' />
                                </p>
                                <p className='text-xl sm:text-2xl font-semibold text-black'>{feature.name}</p>
                            </span>
                        </div>
                    ))}
                </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
