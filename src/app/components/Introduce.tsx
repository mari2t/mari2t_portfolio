import React from "react";

const Introduce = () => {
  return (
    <div>
      <div className="flex justify-center">
        <img
          src="./img/plofilePic.jpg"
          alt="プロフィール画像"
          className="h-24 w-24 rounded-full border-4 mr-4"
        />
        <div className="w-4/5 items-end mb-4 lg:w-2/5 bg-gray-200 rounded-lg p-4">
          <div className="text-sm lg:text-base">
            東京在住の技術職です。品質管理の業務をしています。 <br />
            web関係は2022年9月からJavaScript、TypeScriptを中心に勉強中で、
            <br />
            基本情報技術者試験、AWS Certified Cloud Practitionerを取得しました。
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduce;
