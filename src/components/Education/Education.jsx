import { education } from "../../constants";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My academic foundation in Computer Science and software engineering principles
        </p>
      </div>

      {/* Education Showcase */}
      <div className="max-w-3xl mx-auto">
        {education.map((edu) => (
          <div
            key={edu.id}
            className="w-full p-6 sm:p-10 rounded-2xl shadow-2xl border border-white/20 bg-gray-900/90 backdrop-blur-md shadow-[0_0_25px_2px_rgba(130,69,236,0.35)] transform transition-transform duration-300 hover:scale-[1.02]"
          >
            {/* Degree, Icon & Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-800">
              <div className="flex items-center space-x-4">
                <div className="p-4 bg-purple-950/70 border border-purple-500/50 rounded-2xl text-purple-400">
                  <FaGraduationCap className="text-3xl sm:text-4xl" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {edu.degree}
                  </h3>
                  <h4 className="text-md sm:text-lg text-purple-300 font-medium">
                    {edu.school}
                  </h4>
                </div>
              </div>

              {/* Date & Grade Badges */}
              <div className="flex sm:flex-col items-start sm:items-end justify-between gap-2">
                <span className="text-sm text-gray-400 font-mono bg-gray-800/80 px-3 py-1 rounded-full border border-gray-700">
                  {edu.date}
                </span>
                <span className="text-sm font-semibold text-purple-300 bg-purple-900/40 px-3 py-1 rounded-full border border-purple-500/40">
                  {edu.grade}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="mt-6 text-gray-300 leading-relaxed text-sm sm:text-base">
              {edu.desc}
            </p>

            {/* Relevant Coursework */}
            {edu.coursework && (
              <div className="mt-6 pt-4 border-t border-gray-800/80">
                <h5 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-3">
                  Core Competencies & Coursework:
                </h5>
                <div className="flex flex-wrap gap-2">
                  {edu.coursework.map((course, idx) => (
                    <span
                      key={idx}
                      className="bg-[#251f38] text-purple-300 border border-purple-800/50 text-xs sm:text-sm font-medium px-3 py-1 rounded-lg"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
