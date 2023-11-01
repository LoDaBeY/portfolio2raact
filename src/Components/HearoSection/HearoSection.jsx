import "./HearoSection.css";
import Photo from "../../Assets/Portofolio.jpeg";
import { VscVerifiedFilled } from "react-icons/vsc";
import {
  AiOutlineWhatsApp,
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineSlack,
} from "react-icons/ai";
import { useContext } from "react";
import ThemeContext from "../../Pages/ThemeContext/ThemeContext";
import DarkAnime from "../../Anim/Animation - Dark.json";
import AnimeLight from "../../Anim/Animation - Light.json";

import Lottie from "lottie-react";

function HearoSection() {
  const { Theme } = useContext(ThemeContext);

  return (
    <div id="Up" className="HearoSection">
      <div className="container">
        <div className="section1">
          <div className="Avatar-container">
            <div className="PhotoAndVerified">
              <img className="AvatarImage" src={Photo} alt="Avatar" />
              <div className="verfied-icon">
                <VscVerifiedFilled />
              </div>
            </div>
            <div className="titleAndSub">
              <h1 className="name">
                Welcome to Khaled Ghonim's Translation Services' Website.
              </h1>
              <h3 className="title">
                Greetings, everyone! I'm Khaled Ghonim, the creator of this
                website, meticulously crafted through my own programming skills,
                dedicated to providing unparalleled translation quality by
                combining the art of translation with the precision of coding. I
                proudly wear the hats of a Translator, Transcriptionist,
                Subtitler, and Front-End Developer.
              </h3>
              <div className="icon-container">
                <a href="https://www.linkedin.com/in/khaled-ghonim-4a4007147/">
                  <div className="Icon-LinkedIN">
                    <AiFillLinkedin />
                  </div>
                </a>
                <a href="https://github.com/LoDaBeY?tab=repositories">
                  <div className="Icon-Github">
                    <AiFillGithub />
                  </div>
                </a>
                <a href="https://api.whatsapp.com/send/?phone=905319045891&text&type=phone_number&app_absent=0">
                  <div className="Icon-WhatsApp">
                    <AiOutlineWhatsApp />
                  </div>
                </a>
                <a href="https://join.slack.com/t/kgtranslationservices/shared_invite/zt-1we9k8gw3-ZnuupQXaD3iPj8VQAS3qlg">
                  <div className="Icon-Slack">
                    <AiOutlineSlack />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="section2">
          <div className="animation">
            <Lottie
              animationData={Theme === "Dark" ? DarkAnime : AnimeLight}
              loop={true}
              autoplay={true}
            />
          </div>
        </div>
      </div>

      <div className="Divider"></div>
    </div>
  );
}

export default HearoSection;
