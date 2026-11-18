import ReactTypingEffect from "react-typing-effect";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/profile.jpg";

const About = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Dev. Peter Odero
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={[
                "Fullstack Developer",
                "Backend & Frontend Engineer",
                "REST API & Database Architect",
              ]}
              speed={90}
              eraseSpeed={50}
              typingDelay={400}
              eraseDelay={1800}
              cursorRenderer={(cursor) => (
                <span className="text-[#8245ec]">{cursor}</span>
              )}
            />
          </h3>
          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-300 mb-8 mt-6 leading-relaxed">
            I am a results-oriented <span className="text-white font-semibold">Fullstack Software Devloper</span> experienced in building resilient, end-to-end web applications. On the <span className="text-purple-400 font-medium">frontend</span>, I engineer performant, responsive interfaces using <span className="text-white">React.js, Next.js, and Tailwind CSS</span>. On the <span className="text-purple-400 font-medium">backend</span>, I architect scalable RESTful APIs, robust database models, and server logic with <span className="text-white">Node.js, Express, PHP (Symfony), MySQL, and MongoDB</span>. I pride myself on bridging client-side experience with server-side architecture to deliver production-ready software.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <button
              onClick={() => scrollToSection("work")}
              className="inline-block text-white py-3 px-8 rounded-full text-base sm:text-lg font-bold transition duration-300 transform hover:scale-105 cursor-pointer"
              style={{
                background: "linear-gradient(90deg, #8245ec, #a855f7)",
                boxShadow: "0 0 20px rgba(130, 69, 236, 0.5)",
              }}
            >
              Explore Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="inline-block text-gray-200 py-3 px-8 rounded-full text-base sm:text-lg font-semibold border-2 border-purple-500 hover:bg-purple-900/30 transition duration-300 transform hover:scale-105 cursor-pointer"
            >
              Contact Me
            </button>
          </div>
        </div>
        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[28rem] md:h-[28rem] border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Peter Odero"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;