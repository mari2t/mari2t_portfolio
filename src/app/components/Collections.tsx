import Image from "next/image";

const Collections = () => {
  // 各レポジトリの情報
  const products = [
    {
      title: "TODO everywhere",
      overview: "TODO App",
      useTech: "Next,Tailwind CSS,OpenWether,Maps Embed API",
      creationday: "2023/7/9",
      imgUrl: "/img/imgtodoeverywehere.png",
      githubUrl: "https://github.com/mari2t/todo-everywhere",
    },
    {
      title: "YouWearItWell",
      overview: "Weather App",
      useTech: "Next,CSS Modules,OpenWetherAPI",
      creationday: "2023/5/31",
      imgUrl: "/img/imgyouwear.png",
      githubUrl: "https://github.com/mari2t/YouWearItWell",
    },
    {
      title: "TheRestOfYourLife",
      overview: "Life Time Calculator App",
      useTech: "Vue",
      creationday: "2023/5/4",
      imgUrl: "/img/imgtherest.png",
      githubUrl: "https://github.com/mari2t/TheRestOfYourLife",
    },
    {
      title: "Cover-non-DXenvironment-Girl",
      overview: "Meeting Recording App",
      useTech: "-",
      creationday: "2023/3/11",
      imgUrl: "/img/imgcover.png",
      githubUrl: "https://github.com/mari2t/Cover-non-DXenvironment-Girl",
    },
    {
      title: "MySchedule",
      overview: "Scheduling App",
      useTech: "React,Tailwind CSS",
      creationday: "2023/1/29",
      imgUrl: "/img/imgmyschedule.png",
      githubUrl: "https://github.com/mari2t/MySchedule",
    },
    {
      title: "MydidReact_fourSeasons",
      overview: "App to record what you've done",
      useTech: "React",
      creationday: "2023/1/3",
      imgUrl: "/img/imgmydid.png",
      githubUrl: "https://github.com/mari2t/MydidReact_fourSeasons",
    },
  ];

  return (
    <div className="bg-white py-2 sm:py-8 lg:py-8">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-4 flex items-end justify-between gap-4">
          <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
            Portfolios
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

const Product = ({
  title,
  overview,
  useTech,
  creationday,
  imageUrl,
  githubUrl,
}: ProductProps) => {
  return (
    <div>
      <a
        href={githubUrl}
        className="group mb-2 block h-48 w-full overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3 relative"
      >
        <Image
          src={imageUrl}
          alt={`Photo of ${overview}`}
          layout="fill"
          className="object-cover object-center transition duration-200 group-hover:scale-110"
        />
      </a>
      <div className="flex flex-col">
        <a href={githubUrl}>
          <p className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">
            {overview}
          </p>
          <p className="text-gray-600">{useTech}</p>
          <p className="text-gray-400">Creation Date : {creationday}</p>
        </a>
      </div>
    </div>
  );
};

export default Collections;
