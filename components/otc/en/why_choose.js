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

export default function WhyChoose() {
  return (
    <div className="bg-gray-50 overflow-hidden pt-20 pb-20">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-semibold tracking-wide uppercase mb-20">
          <span className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Why Choose Bitmotto OTC</span>
        </h2>
        <div className="relative lg:grid grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
          <dl className="mt-10 space-y-10 sm:space-y-0 sm:grid lg:grid-cols-3 grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:mt-0 col-span-2 lg:col-span-3">
            {features.map((feature) => (
              <div className="lg:w-64" key={feature.name} >
                <dt>
                  <div className="flex items-center justify-center">
                    <Image
                      src={feature.icon}
                      alt={feature.name}
                      width="100"
                      height="100"
                      className="h-1 w-auto"
                    />
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