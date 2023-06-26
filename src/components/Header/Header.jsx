import React, { useState } from "react";
import Logo from "../../assets/image/logo.png";
import Menu from "../../assets/image/menu-bar.png";
import Close from "../../assets/image/close.png";
const Header = () => {
  const [open, setOpen] = useState(false);

  const nav = [
    {
      title: "Главная",
      link: "/",
    },
    {
      title: "О нас",
      link: "/",
    },
    {
      title: "Наши курсы",
      link: "/",
    },
    {
      title: "Партнеры",
      link: "/",
    },
    {
      title: "Команда",
      link: "/",
    },
    {
      title: "Контакты",
      link: "/",
    },
  ];
  
  return (
    <header className="w-100 relative z-20">
      <div className="container mx-auto w-full h-20 items-center flex justify-between relative">
        <a
          href="/"
          className="flex gap-3 items-center text-xl text-textColor font-medium"
        >
          <img src={Logo} alt="" />
          Manish Etiquette
        </a>
        <ul className="md:flex gap-8 items-center hidden">
          {nav?.map((item) => (
            <li>
              <a className="text-[15px] text-textColor" href={item?.link}>
                {item?.title}
              </a>
            </li>
          ))}
        </ul>
        <div
          className="humburger_menu block md:hidden"
          onClick={() => setOpen(true)}
        >
          {open === false ? (
            <img src={Menu} alt="" />
          ) : (
            <img src={Close} alt="" />
          )}
          {open && (
            <div className="menu_box">
              <ul className="">
                {nav?.map((item) => (
                  <li>
                    <a className=" text-base text-textColor" href={item?.link}>
                      {item?.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
