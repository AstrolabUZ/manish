import React from "react";
import img from "../../../assets/image/aboutCompImg.jpg";
const Academy = () => {
  return (
    <section className="wrapper grid grid-cols-2 py-[100px]">
      <div>
        <h4 className="text-[40px] font-semibold text-textColor">
          Об академии
        </h4>
        <div className="flex flex-col gap-5 text-[15px] mt-5 pr-10 pb-5 text-pColor ">
          <p className="leading-7">
            Академия этикета и персональной дипломатии «MANISH” – единственный
            образовательный центр в Узбекистане сфере программ в области
            этикетa, протокола, элегантности манер.
          </p>
          <p className="leading-7">
            При рождении каждый из нас имеет равные шансы для личного развития.
            По мере роста мы учимся и совершенствуемся, чтобы использовать свой
            потенциал и добиваться успеха в том, что мы делаем.
          </p>
          <p className="leading-7">
            Этикет – это не предмет для изучения, это искусство понимания людей
            и инструмент, который можно применять в повседневной жизни. Он
            трансформирует ваше внутреннее я, ваше отношение к другим и ваш
            образ жизни. Как только вы начнете обращать на это внимание, вы уже
            никогда не будете прежним. Вы увидите, как меняетесь вы и ваше
            окружение.
          </p>
        </div>
      </div>
      <div className="pl-10 pt-20 pb-5">
        <img src={img} alt="" />
      </div>
    </section>
  );
};

export default Academy;
