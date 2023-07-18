/* This example requires Tailwind CSS v2.0+ */
import Image from 'next/image'
import {
  CheckIcon,
  ArrowSmRightIcon
} from '@heroicons/react/outline'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function ContactUs() {
  useEffect(()=> {
    AOS.init();
  }, [])
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1500"
      className="relative flex flex-col-reverse md:flex-row-reverse bg-slate-900 py-12 max-w-6xl md:mx-auto mx-4 rounded-xl md:rounded-none"
    >
      <div className="w-full md:w-2/5 flex space-x-4 p-6 md:pr-12">
        <div className="flex items-center w-1/2">
          <Image
            src="/person-1.0.jpg"
            alt="Person"
            width="480"
            height="844"
            className="h-auto w-auto rounded-lg"
          />
        </div>
        <div className='flex flex-col space-y-4 w-1/2'>
            <div>
                <Image
                    src="/person-2.0.jpg"
                    alt="Person"
                    width="240"
                    height="280"
                    className="h-auto w-auto rounded-lg"
                />
            </div>
            <div>
                <Image
                    src="/person-3.0.jpg"
                    alt="Person"
                    width="240"
                    height="280"
                    className="h-auto w-auto rounded-lg"
                />
            </div>
        </div>
      </div>
      <div className="w-full md:w-3/5">
        <div className="relative h-full flex flex-col justify-center px-6 md:px-12">
          <h1 className="flex text-4xl tracking-tight font-extrabold text-white md:text-6xl">
            Contact us today for a free consultation
          </h1>
          <p className="mt-6 text-base max-w-lg text-white">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.
          </p>
          <div className="mt-8 flex flex-col xs:flex-row space-y-4 xs:space-y-0 xs:space-x-6 w-full">
              <div className="">
                <a
                  href="#"
                  className="w-full flex items-center justify-center border border-transparent px-8 py-4 rounded-lg text-base font-medium text-black bg-white hover:bg-gray-500 md:py-4 md:px-8"
                >
                  Get in touch
                  <ArrowSmRightIcon className='w-5 h-5 text-black' aria-hidden="true" />
                </a>
              </div>
              <div className="">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-4 rounded-lg text-base  text-white bg-transparent hover:bg-gray-500 hover:text-white border border-white md:py-4 md:px-8"
                >
                  Our services
                </a>
              </div>
            </div>
        </div>
      </div>
    </div>

  )
}