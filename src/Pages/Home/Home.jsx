import Footer from "../../Components/Footer/Footer";
import "./Home.css";
import Header from "../../Components/Header/Header";
import MainContent from "../../Components/MainContent/MainContent";
import HearoSection from "../../Components/HearoSection/HearoSection";
import { AiOutlineArrowUp } from "react-icons/ai";
import { useState, useEffect } from "react";
import Loading from "../../Components/Loading/Loading";
import { auth } from "../../Firebase/config";

function Home() {
  const [loading, setLoading] = useState(true);
  const [ScrollBtnUp, setScrollBtnUp] = useState(false);
  useEffect(() => {
    const authListener = auth.onAuthStateChanged(() => {
      setLoading(false); // Set loading to false when authentication state is resolved
    });

    return () => {
      authListener(); // Cleanup the auth listener when the component unmounts
    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 900 ? setScrollBtnUp(true) : setScrollBtnUp(false);
    });
  }, []);


  if (loading) {
    return <Loading />;
  }

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
