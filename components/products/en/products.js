/* This example requires Tailwind CSS v2.0+ */
import { CashIcon, LibraryIcon, LightningBoltIcon, LockClosedIcon, IdentificationIcon } from '@heroicons/react/outline'

const features = [
  {
    name: 'Bitmotto Broker',
    description: 'Web Broker SaaS/WL platform with custody. Allow your customers purchase and sale of digital assets with FIAT currency. SEPA banking integration and internal back-office management.',
    icon: CashIcon,
  },
  {
    name: 'Bitmotto Pay',
    description:
      'Point of sale (POS) Web App SaaS/WL for digital assets. It allows stores or eCommerce to accept payments with digital assets instantly and automatically with settlements in FIAT in less than 48 hours.',
    icon: LightningBoltIcon,
  },
  {
    name: 'Bitmotto Custody',
    description:
      'This is a custody as a service (CaaS), a cold wallet management platform for Bitcoin, Bitcoin Cash, Litecoin, Dash, Ethereum, Tokens erc20, bep20, trc20 among others, built with the highest security standards in the industry',
    icon: LockClosedIcon,
  },
  {
    name: 'Bitmotto Real Estate Tokenization',
    description:
      'Software Real Estate as a Service (REaaS), tokenization and investment platform for real estate projects. Complete FIAT integration and legal support for regulated commercialization in the European Union.',
    icon: LibraryIcon,
  },
  {
    name: 'Bitmotto KYC Engine',
    description:
      "KYC/AML management engine Saas/WL, follows the highest compliance standards of the European Union, following the Bank of Spain's Money Laundering and KYC protocol.",
    icon: IdentificationIcon,
  },
]

export default function Products() {
  return (
    <div className="bg-gray-50 overflow-hidden pt-20 pb-20">
      <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <svg
          className="absolute top-0 left-full transform -translate-x-1/2 -translate-y-3/4 lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="8b1b5f72-e944-4457-af67-0c6d15a99f38"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={784} fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)" />
        </svg>

        <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Our products
            </h2>
          </div>
          <dl className="mt-10 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:mt-0 lg:col-span-2">
            {features.map((feature) => (
              <div key={feature.name}>
                <dt>
                  <div className="flex items-center justify-center h-16 w-16 rounded-md bg-bm2-500 text-white">
                    <feature.icon className="h-10 w-10" aria-hidden="true" />
                  </div>
                  <p className="mt-5 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}