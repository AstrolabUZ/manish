import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import ContactsComponent from "./components/Contacts/ContactsComponent";
import ContactsResponsive from "./components/Contacts/ContactsResponsive";
import { useState } from "react";
import { useEffect } from "react";
function App() {
  const [theMessage, setMessage] = useState(false)
  const lang = sessionStorage.getItem("manish-lang");
  const messsage = sessionStorage.getItem("message");
  if (lang === null) {
    sessionStorage.setItem("manish-lang", "ru");
  }
  useEffect(() => {
    if (messsage !== null) {
      setMessage(messsage)
    }
  }, [theMessage])
  return (
    <>
      <Header />
      <Home setMessage={setMessage} />
      <Footer />
      {window.screen.width > 500
        ? !theMessage && <ContactsComponent setMessage={setMessage} theMessage={theMessage} />
        : !theMessage && <ContactsResponsive setMessage={setMessage} />}
    </>
  );
}

export default App;
