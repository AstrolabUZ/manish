import React from "react";
import img from "../../../assets/image/aboutCompImg.jpg";
import { Language } from "../../../services/language";
const Academy = () => {
  return (
    <section
      className="wrapper md:grid md:grid-cols-2 lt:flex lt:flex-col-reverse md:py-[100px] p-0"
      id="about"
    >
      <div>
        <h4 className="md:text-[40px] text-2xl font-semibold text-textColor lt:py-4 md:py-0">
          {Language("Academy_TITLE")}
        </h4>
        <div className="flex flex-col gap-5 md:text-[15px] text-[13.5px] md:mt-5 md:pr-10 pb-5 text-pColor ">
          <p className="leading-7">
          {Language("Academy_DESC1")}
          </p>
          <p className="leading-7">
          {Language("Academy_DESC2")}
          </p>
          <p className="leading-7">
          {Language("Academy_DESC3")}
          </p>
        </div>
      </div>
      <div className="md:pl-10 md:pt-20 md:pb-5">
        <img src={img} alt="" />
      </div>
    </section>
  );
};

export default Academy;
