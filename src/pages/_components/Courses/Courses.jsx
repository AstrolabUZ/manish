import Card from "../../../components/Cards/Card";
import img1 from "../../../assets/image/card-img1.jpg";
import img2 from "../../../assets/image/card-img2.png";
import img3 from "../../../assets/image/card-img3.png";

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
      <section className="wrapper flex">
        <div>
          <img src="" alt="" />
          <h6>Сертификат</h6>
          <p>По окончании курса выдаётся сертификат</p>
        </div>
      </section>
    </>
  );
};

export default Courses;
