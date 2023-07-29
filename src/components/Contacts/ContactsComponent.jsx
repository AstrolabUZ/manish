import React, { useState } from "react";
import { Language } from "../../services/language";
import InputMask from "react-input-mask";
import swal from 'sweetalert'
const ContactsComponent = ({setMessage,theMessage}) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [direction, setDirection] = useState("Светский этикет");
  const [scroll, setScroll] = useState(false);
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
          swal(Language('CONTACT_RIGHT_SUCCESS'), Language('CONTACT_RIGHT_DESC'), "success");
          setMessage(true)
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

  window.onscroll = function () {
    if (window.screen.width > 500) {
      if(!theMessage){
        myFunction();
      }
      if(theMessage){
        setScroll(false)
      }
    }
  };

  function myFunction() {
      if (document.documentElement.scrollTop > 3500) {
        setScroll(true);
      } else {
        setScroll(false);
      }
  }

  return (
    <div className="w-full fixed right-0 bottom-0 z-[999]" hidden={scroll}>
      <div className="w-full shadow-2xl px-5 h-full bg-white">
        <h2 className="text-center w-full  text-textColor text-[27px] pt-2 pb-2">
          {Language("CONTACT_MESSAGE")}
        </h2>

        <form
          onSubmit={(e) => onSubmit(e)}
          className="relative flex items-center gap-4 pb-2"
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

export default ContactsComponent;
