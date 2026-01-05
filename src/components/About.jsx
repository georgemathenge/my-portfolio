const About = () => {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            George Maina
            <br className="hidden lg:inline-block" />
            <span className="text-green-400 text-2xl">Full-Stack Engineer & Mobile Developer</span>
          </h1>
          <p className="mb-8 leading-relaxed text-gray-300">
            I build scalable digital products that bridge the gap between complex business needs and seamless user experiences. 
            With 3+ years of experience at the <strong>Kenya Revenue Authority (KRA)</strong>, I’ve mastered building secure, enterprise-level systems. 
            Today, I combine that discipline with modern stacks like <strong>Next.js, Node.js, and Flutter</strong> to help businesses automate operations and scale efficiently.
          </p>
          <div className="flex justify-center gap-4">
             <a href="#contact" className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-500 transition">Work With Me</a>
             <a href="#projects" className="bg-gray-800 text-gray-300 px-6 py-2 rounded hover:bg-gray-700 transition">View Portfolio</a>
          </div>
        </div>
      </div>
    </section>
  )
}
export default About
