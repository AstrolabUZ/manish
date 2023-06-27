import RU from "../assets/translations/ru.json";
import UZ from "../assets/translations/uz.json";
export function Language(key) {
  let lang = sessionStorage.getItem("manish-lang");
  let data = null;

  switch (lang) {
    case "uz":
      data = UZ;
      break;

    case "ru":
      data = RU;
      break;

    default:
      break;
  }

  if (data?.hasOwnProperty(key)) {
    return data[key];
  }

  return key;
}
