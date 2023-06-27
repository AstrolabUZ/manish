import {
  FaLocationDot,
  FaSquarePhone,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTelegram,
  FaCheck,
} from "react-icons/fa6";
import { Language } from "../../../services/language";

import { FaEnvelopeSquare } from "react-icons/fa";
// import { FiCheck } from "react-icons/fi";

import { useState } from "react";

const Contacts = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [direction, setDirection] = useState("one");
  const [success, setSuccess] = useState(false);
  let tg = {
    // Test token, chat id
    token: "6242136083:AAF1sg_MpGg-rV_FtN6wVWo3ulF-kPa72Co",
    chat_id: "1778083508",

    // Manish token,chat id //
    // token: "6171916990:AAHIQsOwxdCv-e7s38li0q8ESGSr_32JWCM",
    // chat_id: ""
  };

  function sendMessage() {
    const url = `https://api.telegram.org/bot${tg.token}/sendMessage?chat_id=${
      tg.chat_id
    }&text=${`Manish.uz: имя: ${name}, номер: ${number}, направление: ${direction}`}`;
    const xht = new XMLHttpRequest();
    xht.onreadystatechange = function () {
      if (xht.readyState == XMLHttpRequest.DONE) {
        if (JSON.parse(xht.responseText).ok) {
          setSuccess(true);
          setOptionValue("one");
          setName("");
          setNumber("");
        }
      }
    };
    xht.open("GET", url);
    xht.send();
  }

  const onSubmit = (e) => {
    e.preventDefault();
    sendMessage();
  };
  return (
    <section className="wrapper pt-20 px-12" id="contacts">
      <h2 className="text-center text-textColor md:text-[40px] text-2xl font-semibold">
        {Language("CONTACT_TITLE")}
      </h2>
      <p className="text-pColor text-[22px] pt-5 text-center">
        {Language("CONTACT_DESC")}
      </p>
      <div className="md:flex lt:grid md:gap-32 gap-10 pt-28 pb-24 md:px-12">
        <div className="w-full">
          <div className="flex gap-2 pb-7 items-center">
            <p className="text-pColor font-bold text-[15px]">
              {Language("CONTACT_LEFT1")}
            </p>
            <hr className="w-full" />
          </div>
          <ul className="px-5">
            <li className="list-disc list-outside  text-pColor flex items-center gap-3 pb-5">
              <FaLocationDot />
              <a
                className="text-[14px]"
                href="https://www.google.com/maps?ll=41.333087,69.283945&z=15&t=m&hl=en-US&gl=US&mapclient=embed&cid=5745389386361951605"
              >
                г. Ташкент , ул. Минор 111
              </a>
            </li>
            <li className="list-disc text-pColor flex gap-3 pb-5">
              <FaSquarePhone />
              <a className="text-[14px]" href="tel:+998 93 395 23 32">
                +998 93 395 23 32
              </a>
            </li>
            <li className="list-disc text-pColor flex gap-3 pb-5">
              <FaEnvelopeSquare />
              <a
                className="text-[14px]"
                href="mailto:manish.etiquette@gmail.com"
              >
                manish.etiquette@gmail.com
              </a>
            </li>
          </ul>
          <div className="flex gap-2 pb-7 pt-14 items-center">
            <p className="text-pColor font-bold text-[15px] w-20">
              {Language("CONTACT_LEFT2")}
            </p>
            <hr className="w-full" />
          </div>
          <iframe
            className="w-full h-60"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.9035295931903!2d69.28117427616183!3d41.332711071306925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b4c69192dc9%3A0x4fbbb934de675575!2sUzOman%20Tower!5e0!3m2!1sen!2sus!4v1687783859366!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="grid grid-cols-[auto_1fr] gap-2 pt-10 pb-5 items-center">
            <p className="text-pColor font-bold text-[15px]">
              {Language("CONTACT_LEFT3")}
            </p>
            <hr className="w-full" />
          </div>
          <div className="flex gap-4">
            <a
              className="rounded p-4 bg-iconBg hover:bg-iconHoverBg ease-in-out duration-300"
              href="#"
            >
              <FaFacebook
                style={{
                  color: "#545353",
                }}
              />
            </a>
            <a
              className="rounded p-4 bg-iconBg hover:bg-iconHoverBg ease-in-out duration-300"
              href="#"
            >
              <FaInstagram
                style={{
                  color: "#545353",
                }}
              />
            </a>
            <a
              className="rounded p-4 bg-iconBg hover:bg-iconHoverBg ease-in-out duration-300"
              href="#"
            >
              <FaYoutube
                style={{
                  color: "#545353",
                }}
              />
            </a>
            <a
              className="rounded p-4 bg-iconBg hover:bg-iconHoverBg ease-in-out duration-300"
              href="#"
            >
              <FaTelegram
                style={{
                  color: "#545353",
                }}
              />
            </a>
          </div>
        </div>
        <div className="md:w-9/12 w-full shadow-2xl px-10 h-full">
          <h2 className="text-center w-full  text-textColor text-[32px] font-semibold pt-12">
            {Language("CONTACT_RIGHT_TITLE")}
          </h2>
          <p className="text-center text-sm pt-3 pb-8">
            {Language("CONTACT_RIGHT_DESC")}
          </p>
          <form onSubmit={(e) => onSubmit(e)} className="relative">
            <select
              onChange={(e) => {
                setDirection(e.target.value);
                setSuccess(false);
              }}
              value={direction}
              required
              className="w-full border-solid border-2 border-iconHoverBg p-2 mb-5 focus:outline-none rounded-sm focus:border-black cursor-pointer"
            >
              <option value="Светский этикет">
                {Language("CONTACT_RIGHT_SELECT1")}
              </option>
              <option value="Юный дипломат">
                {Language("CONTACT_RIGHT_SELECT2")}
              </option>
            </select>
            <input
              className="w-full border-solid border-2 border-iconHoverBg p-2 mb-5 focus:outline-none rounded-sm focus:border-black"
              type="text"
              placeholder={Language("CONTACT_RIGHT_INPUT1")}
              required
              onChange={(e) => {
                setName(e.target.value);
                setSuccess(false);
              }}
              value={name}
            />
            <input
              className="w-full border-solid border-2 border-iconHoverBg p-2 mb-5 focus:outline-none rounded-sm focus:border-black"
              type="tel"
              placeholder={Language("CONTACT_RIGHT_INPUT2")}
              required
              onChange={(e) => {
                setNumber(e.target.value);
                setSuccess(false);
              }}
              value={number}
            />
            <button
              type={"submit"}
              className="bg-buttonBg w-full py-3 rounded-3xl text-white text-sm font-semibold hover:bg-black ease-in-out duration-200 mb-14 mt-3 hover:scale-90"
            >
              {Language("CONTACT_RIGHT_BUTTON")}
            </button>
            {success && (
              <div className="flex items-center gap-1 absolute bottom-2">
                <FaCheck color="#53B175" />
                <p className="text-green font-semibold">
                  {Language("CONTACT_RIGHT_SUCCESS")}
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
