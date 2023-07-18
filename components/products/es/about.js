/* This example requires Tailwind CSS v2.0+ */
export default function About() {
  return (
    <div>
      <div className="relative bg-gray-900">
        <div className="h-80 absolute inset-x-0 bottom-0 xl:top-0 xl:h-full">
          <div className="h-full w-full xl:grid xl:grid-cols-2">
            <div className="h-full xl:relative xl:col-start-2">
              <img className="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0"
                   src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2830&amp;q=80&amp;sat=-100"
                   alt="People working on laptops" />
                <div aria-hidden="true"
                     className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"></div>
            </div>
          </div>
        </div>
        <div
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8">
          <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
            <h2 className="text-sm font-semibold tracking-wide uppercase">
              <span className="bg-gradient-to-r from-bm2-300 to-bm1-300 bg-clip-text text-transparent">Nosotros</span>
            </h2>
            <p className="mt-3 text-3xl font-extrabold text-white">Tenemos la misión de contribuir a un sistema financiero abierto</p>
            <p className="mt-5 text-lg text-gray-300">Ayudamos a nuestros clientes en todo el mundo a dar forma al futuro del nuevo sistema financiero abierto habilitado por las criptomonedas con soluciones profesionales y de marca blanca listas para usar.</p>

             <p className="mt-5 text-lg text-gray-300">Nuestro software hace posible el lanzamiento de Mesas OTC, corredores de criptomonedas, Procesadores de Pago Criptográfico en cuestión de minutos, lo que reduce el tiempo de comercialización y el riesgo mediante la implementación de una solución profesional lista para usar.</p>

             {/* <p className="mt-5 text-lg text-gray-300">Rhoncus sagittis risus arcu erat lectus bibendum. Ut in adipiscing
              quis in viverra tristique sem. Ornare feugiat viverra eleifend fusce orci in quis amet. Sit in et vitae
              tortor, massa. Dapibus laoreet amet lacus nibh integer quis. Eu vulputate diam sit tellus quis at.</p> */}
            
          </div>
        </div>
      </div>
    </div>

  )
}