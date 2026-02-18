import React from "react";

const BadgeList = (props) => {
  console.log(props);
  const skills = props.skills;
  return (
    <>
      <section className="min-h-screen max-w-8xl mx-auto text-center px-6 bg-gray-800 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-10">Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {skills.map((skill, index) => {
              return (
                <div className="p-6 bg-linear-to-r from-cyan-400 to-blue-500 rounded-xl" key={index}>
                  {skill}
                </div>
              );
            })}
          </div>

          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="p-6 bg-gray-800 rounded-xl">CSS</div>
            <div className="p-6 bg-gray-800 rounded-xl">Tailwind</div>
            <div className="p-6 bg-gray-800 rounded-xl">BOOTSTRAP</div>
            <div className="p-6 bg-gray-800 rounded-xl">JavaScript</div>
            <div className="p-6 bg-gray-800 rounded-xl">React</div>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default BadgeList;
