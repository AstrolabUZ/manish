import Card from "../../../components/Cards/Card";
import img1 from "../../../assets/image/card-img1.jpg";
import img2 from "../../../assets/image/card-img2.png";
import img3 from "../../../assets/image/card-img3.png";

import { GiSevenPointedStar } from "react-icons/gi";
import { FaChild, FaPercent } from "react-icons/fa";
import { Language } from "../../../services/language";
const Courses = () => {
  const data = [
    {
      img: img1,
      title: Language("COURSETITLE1"),
      subtitle: Language("COURSEDESC1"),
    },
    {
      img: img2,
      title: Language("COURSETITLE2"),
      subtitle: Language("COURSEDESC2"),
    },
    {
      img: img3,
      title: Language("COURSETITLE3"),
      subtitle: Language("COURSEDESC3"),
    },
  ];

  return (
    <>
      <section className="wrapper py-[100px]" id="courses">
        <h6 className="text-center text-textColor text-[40px] font-semibold">
          {Language("COURSE")}
        </h6>
        <div className="grid md:grid-cols-3 gap-14 mt-14">
          {data.map((item, index) => (
            <Card
              img={item?.img}
              title={item?.title}
              subtitle={item?.subtitle}
              key={index}
            />
          ))}
        </div>
      </section>
      <section className="wrapper grid gap-10 md:gap-0 md:grid-cols-[auto_1fr_1fr] md:mt-10">
        <div className="md:px-10">
          <GiSevenPointedStar color="#fc5f5f" size={40} />
          <h6 className="md:text-lg text-base text-textColor font-semibold pt-5 pb-2">
          {Language("SERVICETITLE1")}
          </h6>
          <p className="text-pColor md:text-[15px] text-[13.5px]">
          {Language("SERVICEDESC1")}
          </p>
        </div>
        <div className="md:px-20 ">
          <FaChild color="#fc5f5f" size={40} />
          <h6 className="md:text-lg text-base text-textColor font-semibold pt-5 pb-2">
          {Language("SERVICETITLE2")}
          </h6>
          <p className="text-pColor md:text-[15px] text-[13.5px]">
          {Language("SERVICEDESC2")}
          </p>
        </div>
        <div className="md:px-20">
          <FaPercent color="#fc5f5f" size={40} />
          <h6 className="md:text-lg text-base text-textColor font-semibold pt-5 pb-2">
          {Language("SERVICETITLE3")}
          </h6>
          <p className="text-pColor md:text-[15px] text-[13.5px]">
          {Language("SERVICEDESC3")}
          </p>
        </div>
      </section>
    </>
  );
};

export default Courses;
