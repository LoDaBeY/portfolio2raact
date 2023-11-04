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
