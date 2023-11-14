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
        <div className="chat chat-start w-4/5 items-end mb-4 lg:w-2/5">
          <div className="chat-bubble text-sm lg:text-base ">
            こんにちは、mari2tです。 <br />
            web関係を勉強中です。現在は東京在住の技術職です。 <br />
            ここには作ったものやスキル等を載せています。
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduce;
