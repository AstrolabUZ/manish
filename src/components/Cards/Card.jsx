const Card = ({ img, subtitle, title }) => {
  return (
    <div className="rounded-2xl overflow-hidden hover:shadow-2xl shadow-textColor duration-700">
      <img src={img} alt="" className="" />
      <div className="flex flex-col justify-between bg-[#EFEEF4] md:p-9 p-5 md:h-[320px] h-auto">
        <div className="flex flex-col gap-3">
          <h6 className="md:text-xl text-lg font-bold text-textColor">{title}</h6>
          <p className="md:text-[15px] text-[13.5px] text-pColor leading-7">{subtitle}</p>
        </div>
        <a
          href="#"
          className="md:text-xs text-[10px] text-red font-semibold tracking-[2px] hover:text-textColor duration-700 mt-5"
        >
          УЗНАТЬ БОЛЬШЕ
        </a>
      </div>
    </div>
  );
};

export default Card;
