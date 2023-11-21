"use client";
import { FunctionComponent } from "react";
import { IconContext } from "react-icons";
import { FaPython, FaReact, FaVuejs, FaGitAlt, FaAws } from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiExpress,
  SiMysql,
  SiPostgresql,
  SiGooglecloud,
} from "react-icons/si";

const skills = [
  {
    title: "Development Languages",
    skills: [
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Python", icon: <FaPython /> },
    ],
  },
  {
    title: "Libraries / Frameworks",
    skills: [
      { name: "React", icon: <FaReact /> },
      { name: "Vue.js", icon: <FaVuejs /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MySQL", icon: <SiMysql /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
    ],
  },
  {
    title: "Version Control Tools",
    skills: [{ name: "Git", icon: <FaGitAlt /> }],
  },
  {
    title: "AWS",
    skills: [
      { name: "EC2", icon: <FaAws /> },
      { name: "Lambda", icon: <FaAws /> },
      { name: "S3", icon: <FaAws /> },
      { name: "RDS", icon: <FaAws /> },
      { name: "App Runner", icon: <FaAws /> },
    ],
  },
  {
    title: "GCP",
    skills: [
      { name: "Firestore", icon: <SiGooglecloud /> },
      { name: "Authentication", icon: <SiGooglecloud /> },
    ],
  },
];

const SkillsPage: FunctionComponent = () => {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-2 md:mb-4">
          <h2 className="text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
            🚀Skills
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 md:gap-8 xl:grid-cols-3">
          {skills.map((section, index) => (
            <div
              className="flex flex-col rounded-lg border-4 p-4 md:p-6"
              key={index}
            >
              <h3 className="mb-2 text-lg font-semibold md:text-xl flex items-center">
                <span className="ml-2">
                  {section.title}
                  <div className="flex">
                    {section.skills.map((skill, skillIndex) => (
                      <IconContext.Provider
                        value={{ color: "rgb(12 74 110)" }}
                        key={skillIndex}
                      >
                        {" "}
                        {/* keyを追加 */}
                        <span>{skill.icon}</span>
                      </IconContext.Provider>
                    ))}
                  </div>
                </span>
              </h3>

              <ul style={{ paddingLeft: "30px", listStyleType: "circle" }}>
                {section.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center">
                    {" "}
                    {/* keyはここでも既に使用されている */}
                    <span className="ml-2">{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
