/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'

const faqs = [
  {
    question: "¿Qué es Bitmotto? ",
    answer:
      "Bitmotto es una empresa de servicios Blockchain registrada en España, que opera bajo las leyes de la Unión Europea.",
    key: 1,
  },
  {
    question: "¿Bitmotto es una empresa regulada?",
    answer:
      "Sí, Bitmotto opera bajo la regulación de SEPBLAC, Servicio Ejecutivo de la Comisión de Prevención del Blanqueo de Capitales e Infracciones Monetarias de España, que depende de la Secretaría de Estado de Economía, y está adscrita al Banco de España. Bitmotto cumple con los protocolos contra el blanqueo de capitales más altos de Europa.",
      key: 2,
  },
  {
    question: "¿Cómo funcionan las operaciones comerciales de Bitmotto?",
    answer:
      "Una vez que se realiza el registro y su cuenta ha sido completamente verificada, solo tiene que depositar Euros por transferencia SEPA o Activos Digitales en billeteras Bitmotto. Una vez acreditados los fondos, puede comprar o vender al precio de mercado al instante.",
      key: 3,
  },
  {
    question: "¿Cómo puedo verificar mi cuenta?",
    answer:
      "Para verificar su cuenta, debe pasar por nuestro proceso de cumplimiento legal, ya sea para personas físicas o jurídicas. Nuestro sistema lo guiará durante todo el proceso.",
      key: 4,
  },
  {
    question: "¿Qué activos digitales puedo comprar o vender?",
    answer:
      "Los principales activos digitales están a su disposición, Bitcoin (BTC), Ethereum (ETH), USD COIN (USDC), Tether (USDT), Ripple (XRP) y Paxos (PAX). Asimismo, Bitmotto te permite invertir en cientos de activos digitales, solo necesitas notificarnos tus intenciones y nosotros nos encargamos de todo.",
      key: 5,
  },
  {
    question: "¿Cuál es la cantidad mínima por operación?",
    answer:
      "El monto mínimo es de 5000 € por operación.",
      key: 6,
  },
  {
    question: "¿Cuáles son las tarifas de transacción?",
    answer:
      "Las comisiones de Bitmotto son del 2.5%, pero a diferencia de otros servicios OTC, siempre obtendrá la tasa real del mercado, en tiempo real, sin spread, sin sorpresas.",
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
          <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">Preguntas Frecuentes</h2>
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

