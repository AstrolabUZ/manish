import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home";

function App() {
  const lang = sessionStorage.getItem("manish-lang");
  if (lang === null) {
    sessionStorage.setItem("manish-lang", "ru");
  }
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
}

export default App;
