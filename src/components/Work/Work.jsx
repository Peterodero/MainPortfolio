import { useState } from "react";
import { projects } from "../../constants";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="work"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Featured fullstack and frontend projects highlighting architecture, API design, and performance
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="border border-white/20 bg-gray-900/90 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden cursor-pointer hover:shadow-purple-500/40 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="p-4 bg-gray-950/40">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full aspect-video object-cover rounded-xl"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 line-clamp-1 hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-block bg-[#251f38] text-xs font-medium text-purple-400 rounded-md px-2.5 py-1 border border-purple-800/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Direct Action Links on Card */}
            <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-gray-800/80 mt-auto">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-gray-300 hover:text-purple-400 transition-colors"
                >
                  <FaGithub /> View Code
                </a>
              )}
              {project.webapp && (
                <a
                  href={project.webapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors"
                >
                  <FaExternalLinkAlt className="text-xs" /> Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Modal Container */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm">
          <div className="bg-gray-900 border border-purple-500/40 rounded-2xl shadow-2xl lg:w-full w-[95%] max-w-3xl max-h-[90vh] overflow-y-auto relative">
            <div className="flex justify-end p-4">
              <button
                onClick={handleCloseModal}
                className="text-gray-400 hover:text-white text-3xl font-bold transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                &times;
              </button>
            </div>

            <div className="flex flex-col">
              <div className="w-full flex justify-center bg-gray-950/60 px-6 py-4">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full max-h-[360px] object-contain rounded-xl shadow-2xl"
                />
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-300 mb-6 text-sm sm:text-base leading-relaxed">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-[#251f38] text-xs sm:text-sm font-medium text-purple-300 rounded-lg px-3 py-1 border border-purple-800/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-5 py-3 rounded-xl text-base font-semibold text-center transition-colors border border-gray-700"
                  >
                    <FaGithub /> View Code
                  </a>
                  {selectedProject.webapp && (
                    <a
                      href={selectedProject.webapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-5 py-3 rounded-xl text-base font-semibold text-center transition-colors shadow-lg shadow-purple-600/30"
                    >
                      <FaExternalLinkAlt className="text-sm" /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
