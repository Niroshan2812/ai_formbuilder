import React from 'react'

function Hero() {
  return (
    <section className="bg-gray-900 text-white">
    <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen ">
      <div className="mx-auto max-w-3xl text-center">
        <h1
          className="bg-gradient-to-r from-red-300 via-blue-400 to-red-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
        >
         Create your Form
  
          <span className="sm:block">~  iN  ~  Second </span>
        </h1>
  
        <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed text-gray-400">
          You can create your form with help of AI within Seconds no need to think hours 
        </p>
  
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
            href="#"
          >
           + Create AI From 
          </a>
  
          <a
            className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
            href="#"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Hero