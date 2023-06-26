const Card = ({ img, subtitle, title }) => {
  return (
    <div className="rounded-2xl overflow-hidden hover:shadow-2xl shadow-textColor duration-700">
      <img src={img} alt="" className="" />
      <div className="flex flex-col justify-between bg-[#EFEEF4] p-9 h-[320px]">
        <div className="flex flex-col gap-3">
          <h6 className="text-xl font-bold text-textColor">{title}</h6>
          <p className="text-[15px] text-pColor leading-7">{subtitle}</p>
        </div>
        <a
          href="#"
          className="text-xs text-red font-semibold tracking-[2px] hover:text-textColor duration-700 mt-5"
        >
          УЗНАТЬ БОЛЬШЕ
        </a>
      </div>
    </div>
  );
};

export default Card;
