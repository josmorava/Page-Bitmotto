/* This example requires Tailwind CSS v2.0+ */
import Image from 'next/image'

import {
  PhoneIcon,
  PlayIcon,
} from '@heroicons/react/outline'
import { StarIcon, ArrowSmRightIcon } from '@heroicons/react/solid'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const callsToAction = [
  { name: 'Watch Demo', href: '#', icon: PlayIcon },
  { name: 'Contact Sales', href: '#', icon: PhoneIcon },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Main() {
  useEffect(()=> {
    AOS.init();
  }, [])
  return (
    <div
      id="main"
      data-aos="fade-up"
      data-aos-duration="1500"
      className="relative bg-white max-w-6xl mx-auto"
    >
      <main className="lg:relative">
        <div className="flex flex-col md:flex-row py-16 space-y-8 md:space-y-0">
          <div className="w-full md:w-1/2 flex flex-col justify-center px-4 lg:px-8">
            <div className='flex flex-row w-full justify-start'>
                <StarIcon className='text-yellow-500 w-6 h-6' aria-hidden='true' />
                <StarIcon className='text-yellow-500 w-6 h-6' aria-hidden='true' />
                <StarIcon className='text-yellow-500 w-6 h-6' aria-hidden='true' />
                <StarIcon className='text-yellow-500 w-6 h-6' aria-hidden='true' />
                <StarIcon className='text-yellow-500 w-6 h-6' aria-hidden='true' />
            </div>
            <p className="py-2 w-full text-base text-black">
                Trusted by 1,000+ companies around the world
            </p>
            <h1 className="flex flex-col text-5xl tracking-tight font-extrabold text-zinc-900 sm:text-5xl md:text-6xl lg:text-6xl">
              <span className="block xl:inline md:py-2">Transforming</span>
              <span className="block xl:inline md:py-2">Business through</span>
              <span className="block xl:inline md:py-2">Tecnology</span>
            </h1>
            <p className="mt-2 py-2 text-base text-black">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row w-full space-y-4 sm:space-y-0">
              <div className="sm:mr-6">
                <a
                  href="#"
                  className="w-full flex items-center justify-center border border-transparent px-8 py-4 rounded-lg text-base font-medium text-white bg-black hover:bg-gray-500 md:px-8"
                >
                  Get in touch
                  <ArrowSmRightIcon className='w-5 h-5 text-white' aria-hidden="true" />
                </a>
              </div>
              <div className="">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-4 rounded-lg text-base  text-gray-900 bg-white hover:bg-gray-500 hover:text-white border border-gray-900 md:px-8"
                >
                  Our services
                </a>
              </div>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="2000" 
            className="w-full md:w-1/2 flex flex-row px-4 md:px-0 space-x-4"
          >
            <div
              data-aos="fade-down"
              data-aos-duration="1500"  
              className=''
            >
                <Image
                src="/person-3.jpg"
                alt="Person"
                width="412"
                height="1120"
                className="h-auto w-auto rounded-xl"
                />
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"  
              className='mt-8 md:mt-24'
            >
                <Image
                src="/person-2.jpg"
                alt="Bitmotto"
                width="412"
                height="1120"
                className="h-auto w-auto rounded-xl"
                />
            </div>
            <div
              data-aos="fade-down"
              data-aos-duration="1500"  
              className=''
            >
                <Image
                src="/person-1.jpg"
                alt="Bitmotto"
                width="320"
                height="1120"
                className="h-auto w-auto rounded-xl"
                />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
