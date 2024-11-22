"use client";
import Link from "next/link";
import { FunctionComponent } from "react";
import { IconContext } from "react-icons";
import { BsTwitter } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const profiles = [
  {
    title: "現在",
    profileItems: [
      "求職活動中です💻",
      "2024年10月に応用情報技術者試験を受験しました。",
      "最近は生成AI関連が気になり、課金して使っています。",
    ],
  },
  {
    title: "過去",
    profileItems: [
      "出身は東京です。大学は工学部を卒業しました。",
      "精密機器の品質管理業務に10年以上従事していました。",
      "VBAやPythonを用いた業務効率化を推進してきました。",
    ],
  },
  {
    title: "資格",
    profileItems: [
      "AWS Certified Cloud Practitioner ( 2024年 )",
      "基本情報技術者試験 ( 2021年 )",
      "TOEIC 865 ( 2019年 )",
      "日商簿記検定3級 ( 2016年 )",
    ],
  },
  {
    title: "プログラミング学習",
    profileItems: [
      "2022/05から業務効率化をきっかけに勉強を始めました。",
      "業務効率化はVBAを使用することが多かったです。",
      "Pythonは動画と静止画処理で使用したことがあります。",
    ],
  },
  {
    title: "Web技術",
    profileItems: [
      "2022/09からJavaScriptを学び始めました。",
      "JavaScript、TypeScriptを中心に、他言語もトライ中です。",
      "AWSはS3、EC2、RDS等を何度か使用しました。",
    ],
  },
  {
    title: "好きなもの",
    profileItems: [
      "旅行：知らない街を歩くことが好きです。国内は全県行きました。",
      "投資：優待、配当目的の株投資をしています。",
      "読書：何かに困ったときによく読みます。",
    ],
  },
];

const profileItemsPage: FunctionComponent = () => {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-2 md:mb-4 flex">
          <h2 className="text-2xl font-bold text-gray-800 mr-3 lg:text-3xl items-center justify-center">
            🌱About mari2t
          </h2>
          <div className="flex justify-center items-center mr-3">
            <IconContext.Provider value={{ color: "#adb4b9", size: "1.6em" }}>
              <Link href="https://github.com/mari2t">
                <FaGithub />
              </Link>
            </IconContext.Provider>
          </div>
          <div className="flex justify-center items-center mr-3">
            <IconContext.Provider value={{ color: "#adb4b9", size: "1.6em" }}>
              <Link href="https://twitter.com/gussuri49neru">
                <BsTwitter />
              </Link>
            </IconContext.Provider>
          </div>
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
                {section.profileItems.map((skill) => (
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

export default profileItemsPage;
