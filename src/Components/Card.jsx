import React from "react";

const Card = (props) => {
  console.log(props);
  const projects = props.projects;

  return (
    <>
      <section className="max-w-8xl bg-gray-800 text-white">
        <h3 className="text-3xl font-bold text-center mb-12">Projects</h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {projects.map((project, index) => {
            return (
              <div
                key={index}
                className="
    bg-gradient-to-r from-cyan-400 to-blue-500
    rounded-2xl
    p-6
    shadow-lg
    hover:shadow-2xl
    transition-all duration-300
    flex flex-col
    justify-between
    text-white
    max-w-sm
    mx-auto
  "
              >
                <div>
                  <h1 className="text-xl font-bold text-center mb-3">
                    {project.title}
                  </h1>

                  <p className="text-center text-white/90 text-sm leading-relaxed">
                    {project.desc}
                  </p>
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
      mt-6
      self-center
      bg-black/80
      hover:bg-black
      px-5 py-2
      rounded-full
      text-sm font-medium
      transition-colors duration-300
    "
                >
                  View Project
                </a>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Card;
