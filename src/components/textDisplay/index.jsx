import { useContext } from "react";
import LanguageContext from "../../contexts/LanguageContext";
import styles from "./style.module.css";

const translations = {
  en: {
    header: "English language was chosen",
  },
  ru: {
    header: "Выбран русский язык",
  },
};

const TextDisplay = () => {
  const { language } = useContext(LanguageContext);
  const { header } = translations[language];

  return <h1 className={styles.heading}>{header}</h1>;
};

export default TextDisplay;
