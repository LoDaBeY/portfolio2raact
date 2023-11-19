import "./MainContent.css";
import { useState, useContext } from "react";
import ThemeContext from "../../Pages/ThemeContext/ThemeContext";

function MainContent() {
  const { ProjectData } = useContext(ThemeContext);
  const [CurrentActive, setCurrentActive] = useState("button-active");
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
                setCurrentActive("button-active");
                
                setNewArray(ProjectData);
              }}
              className={
                CurrentActive === "button-active" ? "button-active" : "button"
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
                setCurrentActive("Translation");
                ClickHandler("Translation");
              }}
              className={
                CurrentActive === "Translation" ? "button-active" : "button"
              }
              id="Translation"
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
              id="Subtitling"
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
              id="Transcription"
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
                    <div style={{ width: 300 }} className="TitleAndDescription">
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
