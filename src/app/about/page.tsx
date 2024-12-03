import Link from 'next/link';

const AboutPage = () => {
  return (
    <section className="bg-gradient-to-b from-white via-gray-100 to-gray-200 p-12 space-y-16 rounded-lg shadow-lg">
      {/* Header Section */}
      <div className="text-center space-y-6">
        <h2 className="text-6xl font-extrabold text-gray-800">
          About <span className="text-indigo-600">Me</span>
        </h2>
        <p className="text-xl text-gray-600 leading-relaxed">
          Transforming ideas into reality with creativity and innovation.
        </p>
      </div>

      {/* Content Section */}
      <div className="md:flex md:space-x-12 space-y-8 md:space-y-0">
        <div className="md:w-2/3 space-y-6">
          <p className="text-gray-700 text-lg leading-relaxed">
            Hi, I’m Ameer Hamza, a dedicated Full-Stack Developer and Electrical Engineer passionate about building impactful and engaging web applications and renewable energy With a keen eye for design and functionality, I strive to deliver exceptional solutions tailored to your needs.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            My expertise spans front-end and back-end technologies, including HTML, CSS, JavaScript, Next.js, Plc Ladder Log, AutoCad. I focus on crafting seamless, responsive user experiences while ensuring code quality and scalability.
          </p>
        </div>
      </div>

      {/* Skills Section */}
      <div className="bg-indigo-600 p-8 rounded-lg shadow-md text-center space-y-4">
        <h3 className="text-2xl font-semibold text-white">Technical Skills</h3>
        <p className="text-white">
          HTML, CSS, JavaScript, TypeScript, Next.js, Plc Ladder Log, AutoCad
          
        </p>
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <Link href="/contact" className="bg-indigo-600 text-white py-3 px-8 rounded-full font-semibold hover:bg-indigo-700 transition-all duration-200 shadow-lg">
          Get in Touch
        </Link>
      </div>
    </section>
  );
};

export default AboutPage;
