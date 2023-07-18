/* This example requires Tailwind CSS v2.0+ */
import {
    AcademicCapIcon,
    AtSymbolIcon,
    BellIcon,
    ArrowRightIcon,
} from '@heroicons/react/outline'
import { ArrowSmRightIcon } from '@heroicons/react/solid'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



const services = [
  { icon:AcademicCapIcon, 
    name: 'MVP as a Service', 
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit nibh egestas ullamcorper ipsum nibh quis.',
    bg: 'bg-app-100 rounded-2xl'
  },
  { icon:AtSymbolIcon, 
    name: 'Digital Transformation Strategy',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit nibh egestas ullamcorper ipsum nibh quis.',
    bg: 'bg-app-200 rounded-2xl'
  },
  { icon:BellIcon, 
    name: 'CRM Strategy & Optimization', 
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit nibh egestas ullamcorper ipsum nibh quis.',
    bg: 'bg-app-300 rounded-2xl'
  },
  
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Services() {
  useEffect(()=> {
    AOS.init();
  }, [])
  return (
    <div
      id="services"
      data-aos="fade-up"
      data-aos-duration="1500"
      className="relative bg-white max-w-6xl mx-auto mt-8"
    >
      <main className="lg:relative">
        <div className="flex flex-col py-5">
          <div className="flex flex-col items-center justify-center px-4 sm:px-8">
            <h1 className="flex flex-col max-w-lg text-5xl tracking-tight font-medium text-center leading-tight text-black">
                High-impact services for your business
            </h1>
            <p className="py-2 mt-2 text-base max-w-xl text-gray-900 text-center">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.
            </p>
          </div>

          <div className="py-14 flex">
            <div className='flex flex-col md:flex-row px-4 lg:px-0 items-stretch w-full h-full space-y-6 md:space-y-0 md:space-x-4'>
                {services.map((service) =>(
                    <div
                      data-aos="fade-up"
                      data-aos-duration="1000" 
                      className={service.bg} key={service.name}
                    >
                        <div className="flex h-full">
                            <div className='flex justify-center flex-col pb-12 pt-14 px-6'>
                                <span className='bg-white w-14 flex justify-center items-center rounded-full p-4'>
                                    <service.icon className="w-6 h-6 text-black" aria-hidden="true" />
                                </span>
                                <p className='text-2xl text-black font-medium mt-3 w-full'> {service.name} </p>
                                <div className='pt-5 w-full flex flex-col'>
                                    <p className='text-base text-gray-900'> {service.description} </p>
                                    <ArrowRightIcon className='w-5 h-5 mt-8 text-black' />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="1000"  
            className='px-4 lg:px-0 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center items-center w-full'
          >
            <div className="w-full sm:w-auto">
                <a
                  href="#contact-form"
                  className="w-full flex items-center justify-center border border-transparent px-8 py-4 rounded-lg text-base font-medium text-white bg-black hover:bg-gray-500 md:py-4 md:px-8"
                >
                  Get in touch
                  <ArrowSmRightIcon className='w-5 h-5 text-white' aria-hidden="true" />
                </a>
            </div>
            <div className="w-full sm:w-auto">
                <a
                  href="#contact-form"
                  className="w-full flex items-center justify-center px-8 py-4 rounded-lg text-base  text-gray-900 bg-white hover:bg-gray-500 hover:text-white border border-gray-900 md:py-4 md:px-8"
                >
                  Browse all services
                </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
