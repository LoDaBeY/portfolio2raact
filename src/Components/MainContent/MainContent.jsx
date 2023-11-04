import "./MainContent.css";
import { useState } from "react";

const ProjectData = [
  {
    id: 1,
    title: "Translation",
    catagory: "Translation",
    image: "./images/translation.webp",
    description:
      "As a seasoned language translator, I specialize in providing expert translation services in multiple language pairs. With fluency in English, Arabic, and Turkish, I offer precise and culturally nuanced translations from English to Arabic, Arabic to English, Turkish to Arabic, and Arabic to Turkish. With meticulous attention to detail and a thorough understanding of language intricacies, I ensure your message is accurately conveyed across different languages and cultural contexts    ",
  },
  {
    id: 2,
    title: "Transcription",
    catagory: "Transcription",
    image: "./images/Transcription.jpg",
    description: "lorente transcription",
  },
  {
    id: 3,
    title: "Subtitling",
    catagory: "Subtitling",
    image: "./images/Subtitling.webp",
    description:
      "Unleash the full potential of your videos with my creative expertise in video subtitling and transcription services. I seamlessly bridge the language gap with my Turkish, English, and Arabic fluency, offering accurate and captivating translations in both directions. From English to Arabic, Turkish to Arabic, and beyond, I ensure your videos resonate with diverse audiences, captivating hearts and minds across cultures. Let's bring your visuals to life and connect the world through powerful storytelling    ",
  },
  {
    id: 4,
    title: "MTPE",
    catagory: "MTPE",
    image: "./images/MTPE.webp",
    description:
      "Join me on a journey to transform your language with my MTPE (Machine Translation Post-Editing) editing services. As a linguistic alchemist, I take the raw materials of machine-generated translations and imbue them with the power of human creativity. Witness the magic of technology and human expertise coming together to create linguistic works of art that will capture the hearts and minds of people worldwide. Let's shape the future of communication together    ",
  },

  {
    id: 5,
    title: "All Projects",
    catagory: "allprojects",
    image: "5",
    description: "lorente all projects",
  },
  {
    id: 6,
    title: "Project Management",
    catagory: "Project Management",
    image: "./images/Project Management.webp",
    description:
      "With a wealth of experience as a Project Manager and Operation Manager at reputable companies in Switzerland and the UAE, I offer exceptional Project Management services. I bring a strategic approach, meticulous planning, and effective execution to ensure successful project outcomes aligned with your business objectives",
  },
  {
    id: 7,
    title: "Linguistic Quality Assurance",
    catagory: "Linguistic Quality Assurance",
    image: "./images/Linguistic Quality Assurance.webp",
    description:
      "Embark on a linguistic journey of perfection with my extraordinary Linguistic Quality Assurance services. Harnessing the artistry of language, I weave a tapestry of flawlessness, polishing every word and nuance to captivate your audience. From linguistic finesse to cultural resonance, I breathe life into your content, crafting a symphony of linguistic brilliance. Elevate your brand's voice and leave an indelible mark with my unrivalled linguistic mastery      ",
  },
];
function MainContent() {
  const [CurrentActive, setCurrentActive] = useState("all");
  const [NewArray, setNewArray] = useState(ProjectData);

  const ClickHandler = (ButtonCatagory) => {
    setCurrentActive(ButtonCatagory);
    const fuck = ProjectData.filter((item) => {
      return item.catagory === ButtonCatagory;
    });
    setNewArray(fuck);
  };

  return (
    <div className="MainContent">
      {/* Headline
    paragraphStyle
    buttons
    card  */}

      <div className="Main-Container">
        <div className="Headlines">
          <h2>Projects</h2>
          <p>
            Have a look to the distinguish work I have done over the past 8
            years
          </p>
        </div>

        <div className="Projects-Containers">
          <div className="buttons-conainer">
            <button
              onClick={() => {
                setCurrentActive("All Projects");
                setNewArray(ProjectData);
              }}
              className={
                CurrentActive === "All Projects" ? "button-active" : "button"
              }
            >
              All Projects
            </button>

            <button
              onClick={() => {
                setCurrentActive("Project Management");
                ClickHandler("Project Management");
              }}
              className={
                CurrentActive === "Project Management"
                  ? "button-active"
                  : "button"
              }
            >
              Project Management
            </button>
            <button
              onClick={() => {
                ClickHandler("Translation");
              }}
              className={
                CurrentActive === "Translation" ? "button-active" : "button"
              }
            >
              Translation
            </button>

            <button
              onClick={() => {
                setCurrentActive("Subtitling");
                ClickHandler("Subtitling");
              }}
              className={
                CurrentActive === "Subtitling" ? "button-active" : "button"
              }
            >
              Subtitling
            </button>
            <button
              onClick={() => {
                setCurrentActive("Transcription");
                ClickHandler("Transcription");
              }}
              className={
                CurrentActive === "Transcription" ? "button-active" : "button"
              }
            >
              Transcription
            </button>
            <button
              onClick={() => {
                setCurrentActive("MTPE");
                ClickHandler("MTPE");
              }}
              className={CurrentActive === "MTPE" ? "button-active" : "button"}
            >
              MTPE
            </button>
          </div>

<div className="Card-Containers">
            {NewArray.map((item) => {
              return (
                <div key={item} className="card">
                  <div className="card-body">
                    <img style={{ width: 300 }} src={item.image} alt="" />
                    <div style={{ width: 300 }}className="TitleAndDescription">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text">{item.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
</div>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
