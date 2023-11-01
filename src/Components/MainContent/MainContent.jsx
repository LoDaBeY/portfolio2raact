import  './MainContent.css'
import Photo from '../../Assets/Portofolio.jpeg'
import { useState } from 'react'

const ProjectData= ['1','2','3']
function MainContent() {
  const [CurrentActive, setCurrentActive] = useState("all");

  return (
    <div className='MainContent'>

    {/* Headline
    paragraphStyle
    buttons
    card  */}

<div className="Main-Container">
<div className='Headlines'>
    <h2>Projects</h2>
    <p>Have a look to the distinguish work I have done over the past 8 years</p>
</div>

<div className='Projects-Containers'>
    <div className="buttons-conainer">
        <button onClick={() => { setCurrentActive("Project Management") }} className={CurrentActive === "All Projects"? "button-active": "button"}>All Projects</button>
        <button onClick={() => { setCurrentActive("Project Management") }} className={CurrentActive === "Project Management"? "button-active": "button"}>Project Management</button>
        <button onClick={() => { setCurrentActive("Translation") }} className={CurrentActive === "Translation" ? "button-active": "button"}>Translation</button>
        <button onClick={() => { setCurrentActive("Subtitling") }} className={CurrentActive === "Subtitling" ? "button-active": "button"}>Subtitling</button>
        <button onClick={() => { setCurrentActive("Transcription") }} className={CurrentActive === "Transcription" ? "button-active": "button"}>Transcription</button>
        <button onClick={() => { setCurrentActive("MTPE") }} className={CurrentActive === "MTPE" ? "button-active": "button"}>MTPE</button>
    </div>
  
  {ProjectData.map((item) => { 
    return(
      <div key={item} className="card">
      <div className="card-body">
        <img style={{width:30}} src={Photo} alt="" />
        <h5 className="card-title">Project 1</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
    </div>
    )
   })}
</div>
</div>
    </div>
  )
}

export default MainContent