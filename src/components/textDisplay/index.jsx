import styles from "./style.module.css";
import { useLanguage } from "../../hooks/useLanguage";

const translations = {
  en: {
    header: "English language was chosen",
  },
  ru: {
    header: "Выбран русский язык",
  },
};

const TextDisplay = () => {
  const { language } = useLanguage();
  const { header } = translations[language];

  return <h1 className={styles.heading}>{header}</h1>;
};

export default TextDisplay;
