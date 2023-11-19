import { createContext, useReducer } from "react";
// @ts-ignore
const ThemeContexttt = createContext();

const initialData = {
  Theme:
    localStorage.getItem("Theme") === null
      ? "Light"
      : localStorage.getItem("Theme") === "Light"
      ? "Light"
      : "Dark",
};
const ProjectData = [
  {
    id: 1,
    title: "Translation",
    catagory: "Translation",
    image: "./images/translation.webp",
    description:
      "I offer expert translations in English, Arabic, and Turkish. Specializing in precision and cultural nuances, I cover various language pairs, ensuring your message's accuracy and cultural relevance.   ",
  },
  {
    id: 2,
    title: "Transcription",
    catagory: "Transcription",
    image: "./images/Transcription.jpg",
    description:
      "As a transcriptionist, I specialize in converting audio content into written form with precision and accuracy. With a keen ear and fast typing skills, I ensure that every word is captured. Trust me to transcribe your audio recordings into clear, well-structured text.",
  },
  {
    id: 3,
    title: "Subtitling",
    catagory: "Subtitling",
    image: "./images/Subtitling.webp",
    description:
      "Maximize your videos' impact with my expert subtitling and transcription. With proficiency in Turkish, English, and Arabic, I bridge language barriers, providing captivating translations. Whether English to Arabic or Turkish, I'll make your videos resonate with global audiences, sharing compelling stories worldwide. Let's connect the world through powerful storytelling.   ",
  },
  {
    id: 4,
    title: "MTPE",
    catagory: "MTPE",
    image: "./images/MTPE.webp",
    description:
      "Embark on a language transformation journey with my MTPE (Machine Translation Post-Editing) editing. I blend machine-generated translations with human creativity, creating linguistic masterpieces that resonate globally. Experience the synergy of technology and human expertise in crafting powerful communication. Let's shape the future together.   ",
  },
  {
    id: 6,
    title: "Project Management",
    catagory: "Project Management",
    image: "./images/Project Management.webp",
    description:
      "With extensive experience as a Project Manager and Operation Manager in Switzerland and the UAE, I provide outstanding Project Management services. My strategic approach, meticulous planning, and effective execution guarantee successful project outcomes that align with your business objectives.",
  },
  {
    id: 7,
    title: "Linguistic Quality Assurance",
    catagory: "Linguistic Quality Assurance",
    image: "./images/Linguistic Quality Assurance.webp",
    description:
      "Embark on a journey to linguistic perfection with my exceptional Linguistic Quality Assurance services. I blend the artistry of language to create flawless content that resonates with your audience. From linguistic finesse to cultural relevance, I breathe life into your content, crafting a masterpiece of linguistic brilliance. Elevate your brand's voice and make a lasting impression with my unparalleled linguistic expertise.     ",
  },
];
const reducer = (firstState, action) => {
  switch (action.type) {
    case "CHANGE_THEME":
      return { ...firstState, Theme: action.newValue };
    default:
      return firstState;
  }
};

export function ThemeProvider({ children }) {
  const [firstState, dispatch] = useReducer(reducer, initialData);
  const ChangeTheme = (Newvalue) => {
    localStorage.setItem("Theme", Newvalue);
    // @ts-ignore
    dispatch({ type: "CHANGE_THEME", newValue: Newvalue });
  };
  return (
    <ThemeContexttt.Provider
      value={{ ...firstState, ChangeTheme, ProjectData }}
    >
      {children}
    </ThemeContexttt.Provider>
  );
}

export default ThemeContexttt;
