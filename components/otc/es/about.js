/* This example requires Tailwind CSS v2.0+ */
import Image from 'next/image'

const features = [
  {
    name: 'Alta Liquidez',
    description: 'Contamos con los proveedores de activos digitales más grandes y seguros de Europa que nos permite operar cualquier volumen de transacciones.',
    icon: '/deep_liquidity.png',
  },
  {
    name: 'Servicio 1 a 1',
    description: 'Trabajamos con usted durante todo el proceso para responder a todas sus preguntas y construir una relación confiable y duradera.',
    icon: '/1_on_1_service.png',
  },
  {
    name: 'Transparencia',
    description: 'No tenemos tarifas ocultas, nuestros precios son finales. Compre y venda activos digitales con la tranquilidad de hacerlo en un entorno seguro y regulado. Bitmotto le ayudará en todo el proceso.',
    icon: '/transparency.png',
  },
  {
    name: 'Soporte Legal',
    description: 'Cada transacción es 100% legal. Bitmotto está regulado por la SEPBLAC, Servicio Ejecutivo de la Comisión de Prevención del Blanqueo de Capitales e Infracciones Monetarias de España',
    icon: '/legal_support.png',
  },
  {
    name: 'Estricta Confidencialidad',
    description: 'Todas las transacciones se manejan con un alto grado de privacidad, respetando y garantizando la confidencialidad de la información de nuestros clientes',
    icon: '/confidentiality.png',
  },
  {
    name: 'Rápido Tiempo de Respuesta',
    description: 'Bitmotto OTC procesa operaciones en menos de 24h gracias a nuestra automatización y sólida estructura bancaria. Estamos disponibles 24h los 7 dias de la semana',
    icon: '/quick_response.png',
  },
]
export default function AboutUs() {
  return (
    <div className="relative bg-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
          ¿Por qué elegir Bitmotto OTC?
        </p>
        <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
          Bitmotto OTC actúa como una plataforma de comercio electrónico de grado institucional que proporciona cotizaciones 
          en tiempo real las 24 horas del día, los 7 días de la semana, y garantiza una liquidez profunda y los mejores precios de 
          ejecución en su clase. Soportamos los principales activos digitales y múltiples monedas fiduciarias, con otras monedas 
          fiduciarias disponibles según las necesidades.
        </p>
        <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
          Nuestro equipo de operaciones OTC trabaja para proporcionar liquidez para los pedidos y una 
          entrega rápida para las personas de alto patrimonio, empresas comerciales y clientes corporativos.
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
