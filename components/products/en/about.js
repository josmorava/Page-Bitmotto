/* This example requires Tailwind CSS v2.0+ */
import Image from 'next/image'
import {
  CheckIcon
} from '@heroicons/react/outline'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function About() {
  useEffect(()=> {
    AOS.init();
  }, [])
  return (
    <div
      id='about'
      data-aos="fade-up"
      data-aos-duration="1500"
      className="relative flex space-y-8 flex-col md:flex-row py-16 max-w-6xl mx-auto"
    >
      <div className="w-full md:w-1/2">
        <div className="relative h-full flex flex-col justify-center px-4">
          <h1 className="flex flex-col text-5xl lg:max-w-md tracking-tight font-extrabold text-black md:text-6xl">
            <span className="block xl:inline py-2">Why choose Bitmotto?</span>
            {/* <span className="block xl:inline py-2">Bitmotto?</span> */}
          </h1>
          <p className="py-2 text-base w-full lg:max-w-md text-gray-900">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.
          </p>
          <div className='flex flex-col w-full md:max-w-md space-y-3 mt-6'>
            <p className='flex items-center'>
              <span className='p-1 rounded-full bg-black mr-3'>
                <CheckIcon className='text-white w-5 h-5' aria-hidden="true" />
              </span>
              Lorem ipsum dolor sit amet, consectetur
            </p>
            <p className='flex items-center'>
              <span className='p-1 rounded-full bg-black mr-3'>
                <CheckIcon className='text-white w-5 h-5' aria-hidden="true" />
              </span>
              Lorem ipsum dolor sit amet, consectetur
            </p>
            <p className='flex items-center'>
              <span className='p-1 rounded-full bg-black mr-3'>
                <CheckIcon className='text-white w-5 h-5' aria-hidden="true" />
              </span>
              Lorem ipsum dolor sit amet, consectetur
            </p>
          </div>
          <div className="flex justify-start mt-6">
            <a
              href="#contact-form"
              className="w-full sm:w-auto flex items-center justify-center px-8 py-4 rounded-lg text-base  text-gray-900 bg-white hover:bg-gray-500 hover:text-white border border-gray-900 md:py-4 md:px-8"
            >
              More about us
            </a>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        {/* <div className="hidden lg:flex h-full w-full px-4 lg:px-0">
          <Image
            src="/about.jpg"
            alt="Person"
            width="1280"
            height="1280"
            className="rounded-xl"
          />
        </div> */}
        <div className="flex h-img xs:h-full px-4 lg:px-0">
          <img src="/about.jpg" className='object-cover rounded-2xl' alt="" />
        </div>
      </div>
    </div>

  )
}