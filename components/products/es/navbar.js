/* This example requires Tailwind CSS v2.0+ */
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
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
    name: 'Panel OTC',
    href: '/es',
    description: 'Empiece a operar hoy',
    icon: CashIcon,
  }*/
]
const callsToAction = [
  { name: 'Watch Demo', href: '#', icon: PlayIcon },
  { name: 'Contact Sales', href: '#', icon: PhoneIcon },
]

const languages = [
  {
    name: "Español",
    shortName: "es",
    icon: <Icon icon="noto-v1:flag-for-flag-spain" width={24} />,
    href: '#'
  },
  {
    name: "Inglés",
    shortName: "en",
    icon: <Icon icon="noto-v1:flag-for-flag-united-kingdom" width={24} />,
    href: '/'
  }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <div className="relative bg-gray-50">
      <Popover className="relative bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="/es">
                <Image
                  src="/logo.png"
                  alt="Bitmotto"
                  width="191"
                  height="25"
                  className="h-1 w-auto"
                />
              </a>
            </div>
            <div className="md:hidden">
              <Language  languages={languages} />
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-bm1-500">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Group as="nav" className="hidden md:flex space-x-10">
            </Popover.Group>

            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <Link href="/es">
                <a
                  className="hidden ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 text-base font-medium text-bm1-800 hover:text-gray-500"
                >
                  Panel OTC
                </a>
              </Link>
              <Language languages={languages} />
            </div>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute top-0 inset-x-0 z-10 p-2 transition transform origin-top-right md:hidden"
          >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div>
                    <Image
                      src="/logo.png"
                      alt="Bitmotto"
                      width="191"
                      height="25"
                      className="h-1 w-auto"
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-bm1-500">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    {features.map((item) => (
                      <Link
                        href={item.href}
                        key={item.name}
                      >
                        <a
                          className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                        >
                          <item.icon className="flex-shrink-0 h-6 w-6 text-bm1-800" aria-hidden="true" />
                          <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                        </a>
                      </Link>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>

      <main className="lg:relative">
        <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-center">
          <div className="px-4 lg:w-full sm:px-8 xl:pr-16">
            <h1 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">Nos asociamos con fundadores</span>{' '}
              <span className="block xl:inline">para lanzar su próxima</span>{' '}
              <span className="block text-bm1-800 xl:inline">Cripto-Aventura</span>{' '}
              <span className="block xl:inline">en tiempo récord</span>{' '}
            </h1>
            <p className="mt-3 max-w-md mx-auto text-md text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
            Ayudamos a nuestros clientes en todo el mundo a dar forma al futuro del nuevo sistema financiero abierto, habilitado por las criptomonedas con soluciones profesionales y de marca blanca listas para usar.
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-center">
              <div className="rounded-md shadow">
                <a
                  href="#contact-form"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium text-white bg-red-500 hover:bg-red-400 md:py-4 md:text-lg md:px-10"
                >
                  Contáctanos
                </a>
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>
  )
}
