import woman1 from "../../../assets/image/woman1.jpg";
import woman2 from "../../../assets/image/woman2.jpg";
import woman3 from "../../../assets/image/woman3.jpg";

const Team = () => {
  return (
    <section className="wrapper pt-20 px-12" id="team">
      <h2 className="text-center text-textColor text-[40px] font-semibold">
        Наша команда
      </h2>
      <div className="pt-20 flex items-center gap-8">
        <div className="relative">
          <img src={woman1} className="min-w-[360px] w-full h-[459px] object-cover mix-blend-color-burn" />
          <h4 className="absolute bottom-20 left-9 text-white text-[18px] font-semibold leading-3">
            Малика Кульмухамедова
          </h4>
          <p className="absolute left-10 bottom-12 text-[14px] text-white">
            Основатель Академии
          </p>
        </div>
        <div className="relative">
          <img src={woman2} className="min-w-[360px] w-full h-[459px] object-cover mix-blend-color-burn" />
          <h4 className="absolute bottom-20 left-9 text-white text-[18px] font-semibold leading-3">
            Ираида Мухаммед
          </h4>
          <p className="absolute left-10 bottom-12 text-[14px] text-white">
            Директор Академии
          </p>
        </div>
        <div className="relative">
          <img src={woman3} className="min-w-[360px] w-full h-[459px] object-cover mix-blend-color-burn" />
          <h4 className="absolute bottom-20 left-9 text-white text-[18px] font-semibold leading-3">
            Гулбадан Ёсинбекова
          </h4>
          <p className="absolute left-10 bottom-12 text-[14px] text-white">
            Администратор Академии
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team;
