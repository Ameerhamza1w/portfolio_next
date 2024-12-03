import Image from 'next/image';
import Link from 'next/link';

const HomePage = () => {
    return (
        <div className="home min-h-screen flex items-center justify-center bg-cover bg-center relative" style={{ backgroundImage: "url('/background.jpg')" }}>
            {/* Black Overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* Content Section */}
            <div className="relative z-10 flex flex-col items-center p-8 bg-white bg-opacity-90 rounded-lg shadow-2xl max-w-3xl mx-auto text-center">
                {/* Profile Image */}
                <Image 
                    src="/ah.jpeg" 
                    alt="Ameer Hamza Picture" 
                    width={150} 
                    height={150}  
                    className="rounded-full mb-6 shadow-lg border-4 border-gray-300"
                />
                
                {/* Intro */}
                <h3 className="text-lg font-medium text-gray-600 uppercase tracking-wide">Hello, I am</h3>
                <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">Ameer Hamza Memon</h1>

                {/* Description */}
                <p className="text-base text-gray-700 leading-relaxed mb-4">
 I’m a passionate <span className="text-blue-600 font-semibold">Electrical Engineer</span> with expertise in <span className="text-green-600 font-semibold">Renewable Energy</span> and <span className="text-yellow-500 font-semibold">PLC systems</span>, as well as a skilled <span className="text-indigo-600 font-semibold">Full-Stack Developer</span>. I design and build seamless, responsive web applications using modern technologies like <span className="text-blue-500 font-semibold">React</span>, <span className="text-purple-500 font-semibold">Vue</span>, and <span className="text-teal-400 font-semibold">Tailwind CSS</span>, combining sustainability with technological innovation.
 </p>

 <p className="text-base text-gray-700 leading-relaxed mb-6">
      My goal is to seamlessly integrate design with functionality, delivering meaningful value in every project. Let’s work together to create something truly exceptional!
  </p>

{/* LinkedIn Button */}
 <Link 
                    href="https://www.linkedin.com/in/ameerhamzamemon"
                    className="inline-block bg-blue-600 text-white py-3 px-10 rounded-md font-medium shadow-lg hover:bg-blue-700 transition-all duration-300"
                >
                    Visit My LinkedIn
    </Link>
     </div>
  </div>
    );
};

export default HomePage;
