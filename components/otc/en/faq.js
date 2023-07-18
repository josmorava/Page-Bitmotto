/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'

const faqs = [
  {
    question: "What is Bitmotto? ",
    answer:
      "Bitmotto is a Blockchain services company registered in Spain, operating under the laws of the European Union.",
    key: 1,
  },
  {
    question: "Is Bitmotto a regulated company?",
    answer:
      "Yes, Bitmotto operates under the regulation of SEPBLAC, Executive Service of the Commission for the Prevention of Money Laundering and Monetary Offenses of Spain, which depends on the Secretary of State for the Economy, and is attached to the Bank of Spain. Bitmotto complies with the highest anti-money laundering protocols in Europe.",
      key: 2,
  },
  {
    question: "How does bitmotto trading operations works?",
    answer:
      "Once the registration is done and your account has been fully verified, you only have to deposit Euros by SEPA transfer or Digital Assets to Bitmotto wallets. Once the funds are credited you can buy or sell at market price instantly.",
      key: 3,
  },
  {
    question: "How can I verify my account?",
    answer:
      "To verify your account, you must go through our legal compliance process, either for individuals or legal entities. Our system will guide you through the entire process.",
      key: 4,
  },
  {
    question: "What digital assets can I buy or sell?",
    answer:
      "The main digital assets are at your disposal, Bitcoin (BTC), Ethereum (ETH), USD COIN (USDC), Tether (USDT), Ripple (XRP) and Paxos (PAX). Likewise, Bitmotto allows you to invest in hundreds of digital assets, you just need to notify us of your intentions and we take care of everything.",
      key: 5,
  },
  {
    question: "What is the minimum amount per operation?",
    answer:
      "The minimum amount is €5000 per operation.",
      key: 6,
  },
  {
    question: "What are the transaction fees?",
    answer:
      "Bitmotto commissions are 2.5%, but unlike other OTC services, you will always get the real market rate, in real time, no spread, no surprises.",
      key: 7,
  },
  // More questions...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function FAQ() {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto divide-y-2 divide-gray-200">
          <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">Frequently asked questions</h2>
          <dl className="mt-6 space-y-6 divide-y divide-gray-200">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.key} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                        <span className="font-medium text-gray-900">{faq.question}</span>
                        <span className="ml-6 h-7 flex items-center">
                          <ChevronDownIcon
                            className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base text-gray-500">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

