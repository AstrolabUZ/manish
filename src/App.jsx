import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import ContactsComponent from "./components/Contacts/ContactsComponent";
import ContactsResponsive from "./components/Contacts/ContactsResponsive";
function App() {
  const lang = sessionStorage.getItem("manish-lang");
  const messsage = sessionStorage.getItem("message");
  if (lang === null) {
    sessionStorage.setItem("manish-lang", "ru");
  }
  return (
    <>
      <Header />
      <Home />
      <Footer />
      {window.screen.width > 500
        ? !messsage && <ContactsComponent />
        : !messsage && <ContactsResponsive />}
    </>
  );
}

export default App;
