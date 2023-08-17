import { FunctionComponent } from "react";

const profiles = [
  {
    title: "現在",
    skills: [
      "web関係の技術を勉強中です。",
      "旅行、読書、海外リアリティドラマが好きです📺",
      "外食株主優待目当ての投資も好きです💴",
    ],
  },
  {
    title: "仕事",
    skills: [
      "東京在住の技術職の会社員です。",
      "計測器の品質管理に携わっています🖥️",
    ],
  },
  {
    title: "資格",
    skills: [
      "基本情報技術者試験 ( 2021年 )",
      "TOEIC 865 ( 2019年 )",
      "日商簿記検定3級 ( 2016年 )",
    ],
  },
];

const SkillsPage: FunctionComponent = () => {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-2 md:mb-4 flex">
          <h2 className="text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl items-center justify-center">
            🌱About mari2t
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 md:gap-8 xl:grid-cols-3">
          {profiles.map((section) => (
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
