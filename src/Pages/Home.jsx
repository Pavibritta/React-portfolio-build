import React from "react";
import paviimage from "../assets/images/pavi.jpeg";
import BadgeList from "../Components/BadgeList";
import Card from "../Components/Card";

const Home = () => {
  return (
    <>
      <section
      
        className=" max-w-8xl mx-auto text-center px-6 py-20 bg-gray-800 text-white"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto px-6">
          {/* TEXT SECTION */}
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Hi, I’m{" "}
              <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Pavithra
              </span>
            </h2>

            <p className="mt-6 text-gray-400 text-lg md:text-xl max-w-md">
              Frontend Developer crafting clean, responsive, and user-friendly
              web interfaces using modern technologies.
            </p>

            <p className="mt-4 text-sm md:text-base text-gray-500">
              HTML • Tailwind CSS • JavaScript • React
            </p>

            {/* CTA Buttons */}
            {/* <div className="mt-8 flex gap-4 justify-center md:justify-start">
              <button className="px-6 py-3 rounded-full bg-cyan-500 hover:bg-cyan-600 text-black font-semibold transition">
                View Projects
              </button>
              <button className="px-6 py-3 rounded-full border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black transition">
                Contact Me
              </button>
            </div> */}
          </div>

          {/* IMAGE SECTION */}
          <div className="flex justify-center items-center">
            <div className="relative">
              <img
                src={paviimage}
                alt="Pavithra"
                className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-cyan-400 shadow-2xl"
              />
            </div>
          </div>
        </div>

         {/*skills section */}
      <BadgeList
        skills={["HTML", "CSS", "JAVASCRIPT", "TailwindCss", "React"]}
      />

      {/*project section */}
      <Card
        projects={[
          {
            title: "Git Clone",
            desc: "Git homepage clone using HTML & Tailwind CSS.",
            link: "https://pavibritta.github.io/gitclonelandingpage/",
          },
          {
            title: "LinkedIn UI",
            desc: "Responsive LinkedIn UI clone with Tailwind.",
            link: "https://pavibritta.github.io/linkedinclone/",
          },
          {
            title: "Learning Website",
            desc: "Learning Website with animations.",
            link: "https://pavibritta.github.io/Internship-project-learning-website/",
          },
        ]}
      />
      </section>

     
    </>
  );
};

export default Home;
