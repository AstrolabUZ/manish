import React, { useState } from "react";
import { Language } from "../../services/language";
import InputMask from "react-input-mask";
import { useEffect } from "react";
import swal from "sweetalert";
const ContactsResponsive = ({setMessage}) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [direction, setDirection] = useState("Светский этикет");
  const [scroll, setScroll] = useState(true);
  const [click, setClick] = useState(false);
  let tg = {
    token: "6171916990:AAHIQsOwxdCv-e7s38li0q8ESGSr_32JWCM",
    chat_id: "-1001877123001",
  };

  function sendMessage() {
    const url = `https://api.telegram.org/bot${tg.token}/sendMessage?chat_id=${
      tg.chat_id
    }&text=${`Manish.uz: имя: ${name}, номер: ${number}, направление: ${direction}`}`;
    const xht = new XMLHttpRequest();
    xht.onreadystatechange = function () {
      if (xht.readyState == XMLHttpRequest.DONE) {
        if (JSON.parse(xht.responseText).ok) {
          sessionStorage.setItem("message", true);
          setMessage(true)
          swal(Language('CONTACT_RIGHT_SUCCESS'), Language('CONTACT_RIGHT_DESC'), "success");
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
  useEffect(() => {
    setTimeout(() => {
      setScroll(false);
    }, 13000);
  }, [click]);

  return (
    <div
      className="w-full fixed top-0 left-0 z-[999] h-screen bg-white"
      hidden={scroll}
    >
      <div className="w-full flex justify-end absolute top-5 right-5" >
        <div className="w-[40px] h-[40px] bg-red grid place-items-center rounded-full text-white font-bold" onClick={() => {
            setClick((prev) => !prev);
            setScroll(true);
        }}>
          X
        </div>
      </div>
      <div className="w-full shadow-2xl px-5 h-full bg-white relative top-[30%]">
        <h2 className="text-center w-full  text-textColor text-[18px] pt-2 pb-2">
          {Language("CONTACT_MESSAGE")}
        </h2>

        <form
          onSubmit={(e) => onSubmit(e)}
          className="relative flex flex-col gap-4 pb-2"
        >
          <select
            onChange={(e) => setDirection(e.target.value)}
            value={direction}
            required
            className="w-full border-solid border-2 h-[40px] border-iconHoverBg focus:outline-none rounded-sm focus:border-black cursor-pointer"
          >
            <option value="Светский этикет">
              {Language("CONTACT_RIGHT_SELECT1")}
            </option>
            <option value="Юный дипломат">
              {Language("CONTACT_RIGHT_SELECT2")}
            </option>
          </select>
          <input
            className="w-full border-solid border-2 border-iconHoverBg h-[40px] px-2 focus:outline-none rounded-sm focus:border-black"
            type="text"
            placeholder={Language("CONTACT_RIGHT_INPUT1")}
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <InputMask
            mask="+\9\9\8\ (99) 999-99-99"
            maskChar=" "
            onChange={(e) => setNumber(e.target.value)}
            value={number}
            required={true}
            placeholder={Language("CONTACT_RIGHT_INPUT2")}
            className="w-full border-solid border-2 border-iconHoverBg h-[40px] px-2 focus:outline-none rounded-sm focus:border-black"
          />

          <button
            type={"submit"}
            className="bg-buttonBg w-full h-[40px] px-2 rounded-3xl text-white text-sm font-semibold hover:bg-black ease-in-out duration-200 hover:scale-90"
          >
            {Language("CONTACT_RIGHT_BUTTON")}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactsResponsive;
