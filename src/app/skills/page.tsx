import { FunctionComponent } from "react";

const skills = [
  {
    title: "Development Languages",
    skills: ["JavaScript", "TypeScript", "Python"],
  },
  {
    title: "Libraries / Frameworks",
    skills: ["React", "Vue.js", "Express", "Next.js"],
  },
  { title: "Database", skills: ["MySQL", "PostgreSQL"] },
  { title: "Version Control Tools", skills: ["Git"] },
  { title: "AWS", skills: ["EC2", "Lambda", "S3", "RDS", "App Runner"] },
  { title: "GCP", skills: ["Firestore", "Authentication"] },
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
          {skills.map((section) => (
            <div
              className="flex flex-col rounded-lg border-4 p-4 md:p-6"
              key={section.title}
            >
              <h3 className="mb-2 text-lg font-semibold md:text-xl">
                {section.title}
              </h3>
              <ul style={{ paddingLeft: "30px", listStyleType: "circle" }}>
                {section.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
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
