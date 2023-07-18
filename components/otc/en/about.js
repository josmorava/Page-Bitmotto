/* This example requires Tailwind CSS v2.0+ */
import Image from 'next/image'

const features = [
  {
    name: 'Deep Liquidity',
    description: 'Ability to execute large orders instantly, at very competitive rates, 24/7, across multiple trade pairs.',
    icon: '/deep_liquidity.png',
  },
  {
    name: '1 on 1 Service',
    description: 'We work with you throughout the process to answer all of your questions and build a comfortable, long-lasting relationship.',
    icon: '/1_on_1_service.png',
  },
  {
    name: 'Transparency',
    description: 'We dont have hidden fees our prices are final',
    icon: '/transparency.png',
  },
  {
    name: 'Legal Support',
    description: 'Every transacction is 100% legal.',
    icon: '/legal_support.png',
  },
  {
    name: 'Strict Deal Confidentiality',
    description: 'All transactions handled with a high degree of privacy.',
    icon: '/confidentiality.png',
  },
  {
    name: 'Quick Response Time',
    description: 'Our operations team is available 24/7, 365 days, to solve any trade related grievances.',
    icon: '/quick_response.png',
  },
]
export default function AboutUs() {
  return (
    <div className="relative bg-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
          Why choose Bitmotto OTC?
        </p>
        <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
          Bitmotto OTC is an institutional grade electronic trading platform that provides real
          time quotes 24/7, with deep liquidity and best in class execution pricing. We support all the major
          digital assets, across multiple fiat currencies, with other fiat currencies available on a need based basis.
        </p>
        <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
          Our OTC operations team works to provide liquidity for large order and fast delivery for High-Net-Worth Individuals, Trading Firms, and Corporate Clients.
        </p>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root bg-gray-50 h-full rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-bm2-400 rounded-md shadow-lg">
                        <Image
                          src={feature.icon}
                          alt={feature.name}
                          width="45"
                          height="45"
                          className="h-1 w-auto text-white"
                        />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{feature.name}</h3>
                    <p className="mt-5 text-base text-gray-500">
                      { feature.description }
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
