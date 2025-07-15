import React from "react";

const skills = [
  "Web",
  "HTML",
  "Tailwind",
  "JavaScript",
  "TypeScript",
  "Next.js",
  "Gatsby",
  "Git",
  "UI / UX",
  "Node.js",
  "React",
  "Framer Motion",
];

const SkillCard = ({ name }: { name: string }) => (
  <div
    className="bg-dark text-light dark:bg-light dark:text-dark rounded-xl shadow-md p-6 flex items-center justify-center font-semibold text-lg transition-all duration-200 cursor-default select-none border border-transparent hover:border-primary dark:hover:border-primaryDark transform hover:scale-105 hover:shadow-xl"
  >
    {name}
  </div>
);

const Skills = () => {
  return (
    <section className="w-full py-24 md:py-16">
      <h2 className="font-bold text-8xl w-full text-center mb-16 md:text-6xl md:mb-10">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-5xl mx-auto px-4">
        {skills.map((skill) => (
          <SkillCard key={skill} name={skill} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
