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
            web関係、AI、投資、旅行、読書が好きです🚀
            <br />
            2025年4月に情報処理安全確保支援士を受験予定です。
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduce;
