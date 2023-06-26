import Card from "../../../components/Cards/Card";
import img1 from "../../../assets/image/card-img1.jpg";
import img2 from "../../../assets/image/card-img2.png";
import img3 from "../../../assets/image/card-img3.png";

import { GiSevenPointedStar } from "react-icons/gi";
import { FaChild, FaPercent } from "react-icons/fa";
const Courses = () => {
  const data = [
    {
      img: img1,
      title: "Курс «Светский этикет для леди»",
      subtitle:
        "Это всесторонний подход к формированию цельного гармоничного образа женщины.",
    },
    {
      img: img2,
      title: "Курс «Юный Дипломат»",
      subtitle:
        "На наших уроках дети будут учиться правилам поведения и хорошим манерам в обществе и за столом, сервировке стола и правильному употребления блюд, речевому этикету и ораторскому мастерству.",
    },
    {
      img: img3,
      title: "Курс «Король говорит!»",
      subtitle:
        "Никакая другая способность человека не даст ему возможности с такой быстротой сделать карьеру и добиться признания, как способность хорошо говорить.",
    },
  ];

  return (
    <>
      <section className="wrapper py-[100px]">
        <h6 className="text-center text-textColor text-[40px] font-semibold">
          Наши курсы
        </h6>
        <div className="grid grid-cols-3 gap-14 mt-14">
          {data.map((item) => (
            <Card
              img={item?.img}
              title={item?.title}
              subtitle={item?.subtitle}
            />
          ))}
        </div>
      </section>
      <section className="wrapper grid grid-cols-[auto_1fr_1fr] mt-10">
        <div className="px-10">
          <GiSevenPointedStar color="#fc5f5f" size={40}/>
          <h6 className="text-lg text-textColor font-semibold pt-5 pb-2">Сертификат</h6>
          <p className="text-pColor text-[15px]">По окончании курса выдаётся сертификат</p>
        </div>
        <div className="px-20 ">
          <FaChild color="#fc5f5f" size={40}/>
          <h6 className="text-lg text-textColor font-semibold pt-5 pb-2">Для детей</h6>
          <p className="text-pColor text-[15px]">Есть курсы для детей</p>
        </div>
        <div className="px-20">
          <FaPercent color="#fc5f5f" size={40}/>
          <h6 className="text-lg text-textColor font-semibold pt-5 pb-2">Много скидок</h6>
          <p className="text-pColor text-[15px]">Различные скидки на курсы</p>
        </div>
      </section>
    </>
  );
};

export default Courses;
