import woman1 from "../../../assets/image/woman1.jpg";
import woman2 from "../../../assets/image/woman2.jpg";
import woman3 from "../../../assets/image/woman3.jpg";
import { Language } from "../../../services/language";
const Team = () => {
  return (
    <section className="wrapper pt-20 md:px-12" id="team">
      <h2 className="text-center text-textColor md:text-[40px] text-2xl font-semibold">
        {Language("CLUB_TITLE")}
      </h2>
      <div className="md:pt-20 pt-4 md:flex lt:grid justify-center items-center gap-8">
        <div className="relative">
          <img
            src={woman1}
            className="md:min-w-[360px] w-[400px] h-[459px] object-cover "
          />
          <h4 className="absolute bottom-20 left-9 text-white text-[18px] font-semibold leading-3">
            {Language("PERSON1NAME")}
          </h4>
          <p className="absolute left-10 bottom-12 text-[14px] text-white">
            {Language("PERSON1ROLE")}
          </p>
        </div>
        <div className="relative">
          <img
            src={woman2}
            className="md:min-w-[360px] w-[400px] h-[459px] object-cover"
          />
          <h4 className="absolute bottom-20 left-9 text-white text-[18px] font-semibold leading-3">
            {Language("PERSON2NAME")}
          </h4>
          <p className="absolute left-10 bottom-12 text-[14px] text-white">
            {Language("PERSON2ROLE")}
          </p>
        </div>
        {/* <div className="relative">
          <img src={woman3} className="md:min-w-[360px] w-full h-[459px] object-cover" />
          <h4 className="absolute bottom-20 left-9 text-white text-[18px] font-semibold leading-3">
          {Language("PERSON3NAME")}
          </h4>
          <p className="absolute left-10 bottom-12 text-[14px] text-white">
          {Language("PERSON3ROLE")}
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default Team;
