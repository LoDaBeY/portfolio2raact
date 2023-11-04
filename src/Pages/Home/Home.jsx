import Footer from "../../Components/Footer/Footer";
import "./Home.css";
import Header from "../../Components/Header/Header";
import MainContent from "../../Components/MainContent/MainContent";
import HearoSection from "../../Components/HearoSection/HearoSection";
import { AiOutlineArrowUp } from "react-icons/ai";
import { useState, useEffect } from "react";
function Home() {
  const [ScrollBtnUp, setScrollBtnUp] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100 ? setScrollBtnUp(true) : setScrollBtnUp(false);
    });
  }, []);

  return (
    <div>
      <Header />
      <HearoSection />
      <div className="Divider"></div>
      <MainContent />
      <div className="Divider"></div>
      <Footer />

      {ScrollBtnUp && (
        <a href="#Up">
          <AiOutlineArrowUp className="ScrollBtnUp" />
        </a>
      )}
    </div>
  );
}

export default Home;
