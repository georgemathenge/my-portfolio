import React from 'react'

const About = () => {
  return (
  <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm George.
            <br className="hidden lg:inline-block" />I love to build amazing
            apps.
          </h1>
          <p className="mb-8 leading-relaxed">
            A Bit About Me: Beyond my professional life, I am an avid adventurer, which helps me stay creative <br /> and Whether it’s Hyking or Driving, I find that these activities fuel my passion for innovation and problem-solving.

<br /> <br /> Why Choose Me: I believe in the power of technology to transform lives and businesses. My goal is to leverage my expertise to create solutions that not only meet but exceed expectations. I am committed to continuous learning and staying updated with the latest industry trends to ensure that my work is always at the cutting edge.

<br /> <br /> Thank you for taking the time to explore my portfolio. I look forward to the possibility of collaborating and bringing your vision to life.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
          />
        </div>
      </div>
    </section>
  )
}

export default About