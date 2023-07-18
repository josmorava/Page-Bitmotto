/* This example requires Tailwind CSS v2.0+ */
import {
    ArrowRightIcon,
    UserCircleIcon
} from '@heroicons/react/outline'
import { StarIcon, ArrowSmRightIcon } from '@heroicons/react/solid'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const features = [
  { icon:UserCircleIcon, 
    title: 'An amazing consulting agency', 
    coment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit nibh egestas ullamcorper ipsum nibh quis.',
    name: 'Jhon Carter',
    charge: 'VP of Desing Promoplus'
  },
  { icon:UserCircleIcon, 
    title: 'Highly recommended them', 
    coment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit nibh egestas ullamcorper ipsum nibh quis.',
    name: 'Sophie Moore',
    charge: 'VP of Marketing at Darklit'
  },
  { icon:UserCircleIcon, 
    title: 'One of a kind service', 
    coment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit nibh egestas ullamcorper ipsum nibh quis.',
    name: 'Lily Woods',
    charge: 'VP of Product Corporate'
  },
  
  
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Coments() {
  useEffect(()=> {
    AOS.init();
  }, [])
  return (
    <div 
      data-aos="fade-up"
      data-aos-duration="1500"
      className="relative bg-white max-w-6xl mx-auto pt-12"
    >
      <main className="lg:relative">
        <div className="flex flex-col py-5">
          <div className="flex flex-col items-center justify-center px-4 sm:px-8">
            <h1 className="max-w-lg text-5xl tracking-tight font-semibold text-center leading-tight text-black">
                Hear what our great customers say
            </h1>
            <p className="py-2 text-base max-w-xl text-gray-900 text-center">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.
            </p>
          </div>

          <div className="py-14 flex">
            <div className='flex items-stretch w-full h-full flex-col md:flex-row px-4 space-y-8 md:space-y-0 md:space-x-4'>
                {features.map((feature) =>(
                    <div
                      data-aos="fade-up"
                      data-aos-duration="1000" 
                      className='bg-gray-100 rounded-md' key={feature.title}
                    >
                        <div className="flex h-full">
                            <div className='flex justify-start items-center flex-col py-16 px-6'>
                                <span className='flex justify-center items-center'>
                                    <feature.icon className="w-14 h-14 text-black" aria-hidden="true" />
                                </span>
                                <p className='text-2xl text-black font-medium mt-3 w-full text-center'>
                                    "{feature.title}"
                                </p>
                                <p className='text-base text-gray-900 py-2 text-center'>{feature.coment}</p>
                                <div className='pt-5 w-full flex flex-col items-center'>
                                    <p className='text-base font-semibold'>{feature.name}</p>
                                    <p className='text-base'>{feature.charge}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
          </div>

          <div className='flex justify-center items-center w-full px-4 md:px-0'>
            <div className="w-full xs:w-auto">
                <a
                  href="#contact-form"
                  className="w-full flex items-center justify-center border border-transparent px-8 py-4 rounded-lg text-base font-medium text-white bg-black hover:bg-gray-500 md:py-4 md:px-8"
                >
                  Get in touch
                  <ArrowSmRightIcon className='w-5 h-5 text-white' aria-hidden="true" />
                </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
