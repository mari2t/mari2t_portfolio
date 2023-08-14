// pages/about.tsx
import { FunctionComponent } from "react";

const AboutPage: FunctionComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-gray-50">
      <h1 className="text-2xl font-bold text-center mt-2 mb-4">Mari2t</h1>
      <img src="/img/plofilePic.jpg" alt="portrait" className="w-36 h-36" />
      <div className="w-1/4 mt-2 px-4 py-4 bg-white rounded-lg border-4">
        <p className="text-md">web関係の技術を勉強中です。</p>
        <p className="text-md">趣味は海外リアリティドラマ鑑賞、</p>
        <p className="text-md">読書です。</p>
      </div>
      <div className="w-1/4 mt-2 px-4 py-4 bg-white rounded-lg border-4">
        <h2 className="text-xl font-bold text-center mb-2">仕事</h2>
        <p className="text-md">東京在住の技術職の会社員です。</p>
        <p className="text-md">計測器の品質管理に携わっています。</p>
      </div>
      <div className="w-1/4 mt-2 px-4 py-4 bg-white rounded-lg border-4">
        <h2 className="text-xl font-bold text-center mb-2">資格</h2>
        <p className="text-md">基本情報技術者試験 ( 2021年 )</p>
        <p className="text-md">TOEIC 865 ( 2019年 )</p>
      </div>
    </div>
  );
};

export default AboutPage;
