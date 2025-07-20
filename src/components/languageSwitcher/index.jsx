import { useContext } from "react";
import LanguageContext from "../../contexts/LanguageContext";
import styles from "./style.module.css";

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);

  const buttonLabel =
    language === "en" ? "Switch language" : "Переключить язык";

  return (
    <button onClick={toggleLanguage} className={styles.switchBtn}>
      {buttonLabel}
    </button>
  );
};

export default LanguageSwitcher;
