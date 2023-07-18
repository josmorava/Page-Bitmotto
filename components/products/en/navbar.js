/* This example requires Tailwind CSS v2.0+ */
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { Fragment } from 'react'
import { Popover, Transition , Menu } from '@headlessui/react'
import {
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  XIcon,
  CashIcon
} from '@heroicons/react/outline'
import Language from '../../utils/select_languague'

const features = [
/*  {
    name: 'OTC Desk',
    href: '/',
    description: 'Start trading today',
    icon: CashIcon,
  }*/
  {name: 'Home', href: '#home'},
  {name: 'About', href: '#about'},
  {name: 'Services', href: '#services'},
  {name: 'Products', href: '#'},
  {name: 'Case Studies', href: '#'},
  {name: 'Blog', href: '#'}
]
// const callsToAction = [
//   { name: 'Watch Demo', href: '#', icon: PlayIcon },
//   { name: 'Contact Sales', href: '#', icon: PhoneIcon },
// ]

// const languages = [
//   {
//     name: "English",
//     shortName: "en",
//     icon: <Icon icon="noto-v1:flag-for-flag-united-kingdom" width={24} />,
//     href: '#'
//   },
//   {
//     name: "Spanish",
//     shortName: "es",
//     icon: <Icon icon="noto-v1:flag-for-flag-spain" width={24} />,
//     href: '/es/'
//   }
// ]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <div
      id='home' 
      className="relative max-w-6xl mx-auto"
    >
      <Menu className="bg-white border-b-2 border-gray-200 md:border-none">
        <div className="">
          <div className="flex justify-between items-center py-4 px-4 md:px:0">
            <div className="flex">
              <a href="/">
                <Image
                  src="/bitmotto-dark.png"
                  alt="Bitmotto"
                  width="191"
                  height="25"
                  className="h-1 w-auto"
                />
              </a>
            </div>
            {/* <div className="md:hidden">
              <Language  languages={languages} />
            </div> */}
            <div className="md:hidden flex">
              <Menu.Button className="bg-transparent flex items-center justify-center text-black focus:outline-none">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-7 w-7" aria-hidden="true" />
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Menu.Items
                  focus
                  className="absolute top-16 mt-1 inset-x-0 z-10 transition transform origin-top-right md:hidden"
                >
                  <div className="border-b-2 border-gray-300 bg-white">
                    <div className="py-4 px-4">
                      <div className="py-2">
                        <nav className="grid gap-y-4">
                          {features.map((item) => (
                            <Menu.Item
                              key={item.name}
                              href={item.href}
                            >
                                <a
                                  className="flex py-2 items-center rounded-md hover:bg-gray-50"
                                >
                                  <span className="text-base font-medium text-gray-900">{item.name}</span>
                                </a>
                            </Menu.Item>
                          ))}
                        </nav>
                      </div>
                    </div>
                  </div>
                </Menu.Items>
              </Transition>
            </div>

            <div className="hidden md:flex items-center justify-center">
              {/* <Language languages={languages} /> */}
              {features.map(feature =>(
                <p key={feature.name} className='px-4'>
                  <a className='text-black text-base' href={feature.href}>{feature.name}</a>
                </p>
              ))}
            </div>

            <div className='hidden md:flex'>
              <a href='#' className='flex bg-black rounded-lg p-4 text-white font-semibold text-base'>
                Get in touch
              </a>
            </div>

          </div>
        </div>
      </Menu>
    </div>
  )
}

