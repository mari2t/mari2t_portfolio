"use client";
import Image from "next/image";
import Introduce from "./Introduce";
import { IconContext } from "react-icons";
import {
  BiLogoTypescript,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoVuejs,
  BiLogoJavascript,
} from "react-icons/bi";
import { TbBrandNextjs, TbApi, TbBrandSvelte } from "react-icons/tb";
import { SiRubyonrails } from "react-icons/si";

const Collections = () => {
  // 各レポジトリの情報
  const products = [
    {
      title: "ruby-kids-todo",
      overview: "🧒 子供用TODOアプリ",
      useTech: "RubyOnRails",
      creationday: "2024/1/27",
      imgUrl: "/img/imgRuby-kids-todo.png",
      githubUrl: "https://github.com/mari2t/ruby-kids-todo",
    },
    {
      title: "subscription-management",
      overview: "💰 サブスクリプション管理アプリ",
      useTech: "Typescript,Next,Tailwind CSS",
      creationday: "2023/12/28",
      imgUrl: "/img/imgSubscription-management.png",
      githubUrl: "https://github.com/mari2t/subscription-management",
    },
    {
      title: "action-impact-comparison",
      overview: "🚶 行動比較アプリ",
      useTech: "Svelte,Tailwind CSS",
      creationday: "2023/11/11",
      imgUrl: "/img/imgActionImpactComparison.png",
      githubUrl: "https://github.com/mari2t/action-impact-comparison",
    },
    {
      title: "mari2t_portfolio",
      overview: "📖 ポートフォリオサイト",
      useTech: "Typescript,Next,Tailwind CSS",
      creationday: "2023/8/14",
      imgUrl: "/img/imgportfoliosite.png",
      githubUrl: "https://github.com/mari2t/mari2t_portfolio",
    },
    {
      title: "TODO everywhere",
      overview: "	✔️TODO アプリ",
      useTech: "Typescript,Next,Tailwind CSS,API",
      creationday: "2023/7/9",
      imgUrl: "/img/imgtodoeverywehere.png",
      githubUrl: "https://github.com/mari2t/todo-everywhere",
    },
    {
      title: "YouWearItWell",
      overview: "🌞 お天気アプリ",
      useTech: "Next,API",
      creationday: "2023/5/31",
      imgUrl: "/img/imgyouwear.png",
      githubUrl: "https://github.com/mari2t/YouWearItWell",
    },
    {
      title: "TheRestOfYourLife",
      overview: "🧓 人生の残り時間計算アプリ",
      useTech: "Vue",
      creationday: "2023/5/4",
      imgUrl: "/img/imgtherest.png",
      githubUrl: "https://github.com/mari2t/TheRestOfYourLife",
    },
    {
      title: "Cover-non-DXenvironment-Girl",
      overview: "🗣️ 打ち合わせ記録アプリ",
      useTech: "JavaScript",
      creationday: "2023/3/11",
      imgUrl: "/img/imgcover.png",
      githubUrl: "https://github.com/mari2t/Cover-non-DXenvironment-Girl",
    },
    {
      title: "MySchedule",
      overview: "📅 スケジューリングアプリ",
      useTech: "React,Tailwind CSS",
      creationday: "2023/1/29",
      imgUrl: "/img/imgmyschedule.png",
      githubUrl: "https://github.com/mari2t/MySchedule",
    },
    {
      title: "MydidReact_fourSeasons",
      overview: "✅ やったこと記録アプリ",
      useTech: "React",
      creationday: "2023/1/3",
      imgUrl: "/img/imgmydid.png",
      githubUrl: "https://github.com/mari2t/MydidReact_fourSeasons",
    },
  ];

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <Introduce />
        <div className="mb-2 mt-4 flex items-end justify-between md:mb-4">
          <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
            📖Portfolios
          </h2>
        </div>
        <div className="grid gap-x-4 gap-y-6 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <Product
              key={product.title}
              title={product.title}
              overview={product.overview}
              useTech={product.useTech}
              creationday={product.creationday}
              imageUrl={product.imgUrl}
              githubUrl={product.githubUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

type ProductProps = {
  title: string;
  overview: string;
  useTech: string;
  creationday: string;
  imageUrl: string;
  githubUrl: string;
};

type TechIconProps = {
  techName: string;
};

const Product = ({
  title,
  overview,
  useTech,
  creationday,
  imageUrl,
  githubUrl,
}: ProductProps) => {
  const techArray = useTech.split(",");
  return (
    <div>
      <a
        href={githubUrl}
        className="group mb-2 block h-48 w-full overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3 relative"
      >
        <div className="relative h-[400px] w-full">
          <Image
            src={imageUrl}
            alt={`Photo of ${overview}`}
            width={1600}
            height={600}
            className="transition duration-200 group-hover:scale-110"
          />
        </div>
      </a>
      <div className="flex flex-col">
        <a href={githubUrl}>
          <p className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500">
            {overview}
          </p>
          <div className="flex">
            {techArray.map((tech, index) => (
              <TechIcon key={index} techName={tech.trim()} />
            ))}
          </div>
          <p className="text-gray-400">Creation Date : {creationday}</p>
        </a>
      </div>
    </div>
  );
};

// TechIconコンポーネント
const TechIcon = ({ techName }: TechIconProps) => {
  return (
    <div className="inline-block mr-2 ">
      <IconContext.Provider value={{ color: "rgb(12 74 110)", size: "1.6em" }}>
        {techName === "Typescript" && <BiLogoTypescript />}
        {techName === "React" && <BiLogoReact />}
        {techName === "Tailwind CSS" && <BiLogoTailwindCss />}
        {techName === "Next" && <TbBrandNextjs />}
        {techName === "Vue" && <BiLogoVuejs />}
        {techName === "API" && <TbApi />}
        {techName === "JavaScript" && <BiLogoJavascript />}
        {techName === "Svelte" && <TbBrandSvelte />}
        {techName === "RubyOnRails" && <SiRubyonrails />}
      </IconContext.Provider>
    </div>
  );
};

export default Collections;
