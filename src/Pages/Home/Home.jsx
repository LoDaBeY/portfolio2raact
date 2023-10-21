import Footer from "../../Components/Footer/Footer";
import "./Home.css";
import Header from "../../Components/Header/Header";
import MainContent from "../../Components/MainContent/MainContent";
import HearoSection from "../../Components/HearoSection/HearoSection";
import HeaderDrawer from "../../Components/HeaderDrawer/HeaderDrawer";

function Home() {
  return (
    <div>
      <Header />
      <HearoSection />
      <MainContent />
      <Footer />
    </div>
  );
}

export default Home;
