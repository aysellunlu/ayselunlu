import React from "react";
import Image from "react-bootstrap/Image";
import Photo from "../img/photo.png";
import AyselUnlu from "../img/ayselunlu.svg";

const MainPage = () => {
  return (
    <div className="container-fluid p-0">
      <div className="bg-image text-center pt-5">
        <div className="pb-5 row">
          <div className="col-lg-6 col-sm-12 pr-0">
            <div className="text-center">
              <Image className="photo" src={Photo} width={400} />
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <div className="ayselunlu">
              <Image className="text-left" src={AyselUnlu} width={350} />
            </div>
          </div>
          <div className="mainpage-line"></div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
