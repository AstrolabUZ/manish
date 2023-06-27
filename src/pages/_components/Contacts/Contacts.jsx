import {
  FaLocationDot,
  FaSquarePhone,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTelegram,
} from "react-icons/fa6";
import { FaEnvelopeSquare } from "react-icons/fa";

const Contacts = () => {
  return (
    <section className="wrapper pt-20 px-12" id="contacts">
      <h2 className="text-center text-textColor md:text-[40px] text-2xl font-semibold">
        Наши контакты
      </h2>
      <p className="text-pColor text-[22px] pt-5 text-center">
        Если вы заинтересованы в наших курсах, пожалуйста, оставьте свой номер
        телефона или свои данные, и мы свяжемся с вами в ближайшее время
      </p>
      <div className="md:flex lt:grid md:gap-32 gap-10 pt-28 pb-24 md:px-12">
        <div className="w-full">
          <div className="flex gap-2 pb-7 items-center">
            <p className="text-pColor font-bold text-[15px]">Связаться</p>
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
            <p className="text-pColor font-bold text-[15px] w-20">Мы тут</p>
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
              Подписывайтесь на нас
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
            Отправьте нам сообщение
          </h2>
          <p className="text-center text-sm pt-3 pb-8">
            Мы свяжемся с вами в ближайшее время.
          </p>
          <select className="w-full border-solid border-2 border-iconHoverBg p-2 mb-5 focus:outline-none rounded-sm focus:border-black cursor-pointer">
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="4">Four</option>
            <option value="5">Five</option>
            <option value="6">Six</option>
            <option value="7">Seven</option>
            <option value="8">Eight</option>
          </select>
          <input
            className="w-full border-solid border-2 border-iconHoverBg p-2 mb-5 focus:outline-none rounded-sm focus:border-black"
            type="text"
            placeholder="Ваше имя"
          />
          <input
            className="w-full border-solid border-2 border-iconHoverBg p-2 mb-5 focus:outline-none rounded-sm focus:border-black"
            type="tel"
            placeholder="Номер телефона"
          />
          <button className="bg-buttonBg w-full py-3 rounded-3xl text-white text-sm font-semibold hover:bg-black ease-in-out duration-200 mb-24 mt-3 hover:scale-90">
            Отправить
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
