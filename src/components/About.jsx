import React from 'react'

const About = () => {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm George Maina.
            <br className="hidden lg:inline-block" />
            I build secure, high-performance financial systems.
          </h1>
          <p className="mb-8 leading-relaxed text-gray-300">
            Specializing in <strong>Next.js</strong> and <strong>Flutter</strong>, I bridge the gap between complex business logic and intuitive user experiences. 
            <br /><br />
            Whether it's automating <strong>payment reconciliations</strong> or building <strong>internal administrative dashboards</strong>, I focus on creating tools that reduce overhead and drive efficiency. My background with the Kenya Revenue Authority (KRA) means I build with security and scalability as a priority.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-green-500 rounded text-lg transition duration-300">
              Start a Project
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg transition duration-300">
              View My Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded shadow-2xl"
            alt="Software Solutions"
            src="./coding.svg" 
          />
        </div>
      </div>
    </section>
  )
}

export default About
