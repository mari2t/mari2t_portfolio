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
      "東京在住の会社員です。",
      "web関係の技術を勉強中です。",
      "AWS Certified Cloud Practitioner取得を目指しています。",
    ],
  },
  {
    title: "仕事",
    profileItems: [
      "都内の会社で技術職の業務をしています。",
      "機器類操作60％、PC作業40％程度です。",
      "大学は工学部電気工学科を専攻しました。",
    ],
  },
  {
    title: "資格",
    profileItems: [
      "基本情報技術者試験 ( 2021年 )",
      "TOEIC 865 ( 2019年 )",
      "日商簿記検定3級 ( 2016年 )",
    ],
  },
  {
    title: "プログラミング学習",
    profileItems: [
      "2022/05から業務効率化をきっかけに勉強を始めました。",
      "業務効率化はVBAを使用することが多いです。",
      "Pythonは動画と静止画処理で使用したことがあります。",
    ],
  },
  {
    title: "Web技術",
    profileItems: [
      "2022/09からJavaScriptを学び始めました。",
      "フロント側が好きです。",
      "バック、DBは強化中です🖊️",
      "AWSはS3,EC2,RDS等を何度か使用しました。",
    ],
  },
  {
    title: "好きなもの",
    profileItems: [
      "旅行が好きで、国内は静岡、山梨、福島以外は行きました🚅",
      "ルポールのドラッグレースが好きです📺",
      "外食が好きなので、優待目当ての株投資をしています💴",
      "読書が好きです。何かに困ったときによく読みます📘",
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
