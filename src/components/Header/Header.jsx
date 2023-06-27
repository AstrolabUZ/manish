import React, { useState } from "react";
import Logo from "../../assets/image/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { Language } from "../../services/language";
const Header = () => {
  const [open, setOpen] = useState(false);
  const lang = sessionStorage.getItem("manish-lang");

  const nav = [
    {
      title: Language("MAIN"),
      href: "/",
    },
    {
      title: Language("ABOUT"),
      href: "#about",
    },
    {
      title: Language("COURSE"),
      href: "#courses",
    },
    {
      title: Language("PARTNERS"),
      href: "#partners",
    },
    {
      title: Language("CLUB"),
      href: "#team",
    },
    {
      title: Language("CONTACT"),
      href: "#contacts",
    },
  ];

  const onChangeLanguage = () => {
    switch (lang) {
      case "uz":
        sessionStorage.setItem("manish-lang", "ru");
        window.location.reload();
        break;
      case "ru":
        sessionStorage.setItem("manish-lang", "uz");
        window.location.reload();
        break;
      default:
        break;
    }
  };

  return (
    <header className="w-100 relative z-20">
      <div className="wrapper h-20 items-center flex justify-between">
        <a
          href="/"
          className="flex gap-3 items-center  text-base md:text-xl text-textColor font-medium"
        >
          <img src={Logo} alt="" />
          Manish Etiquette
        </a>
        <div className="flex items-center md:gap-10 gap-5">
          <ul className="md:flex gap-8 items-center hidden">
            {nav?.map((item, index) => (
              <li key={index}>
                <a className="text-[15px] text-textColor" href={item?.href}>
                  {item?.title}
                </a>
              </li>
            ))}
          </ul>
          <span
            className="md:text-[14px] text-xs font-semibold cursor-pointer border-b border-black"
            onClick={onChangeLanguage}
          >
            {lang === "ru" ? "Рус" : "Uzb"}
          </span>
          <div
            className="block md:hidden"
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? (
              <IoMdClose size={35} color={"#5D6167"} />
            ) : (
              <GiHamburgerMenu size={30} color={"#5D6167"} />
            )}
          </div>
        </div>
      </div>

      <div>
        {open && (
          <div className="absolute top-[80px] bg-white w-full">
            <ul className="flex flex-col">
              {nav?.map((item, index) => (
                <li className="border-b border-[#d1d8dd] py-1.5" key={index}>
                  <a className="text-sm text-red px-5" href={item?.href}>
                    {item?.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
