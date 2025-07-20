import styles from "./style.module.css";
import { useLanguage } from "../../hooks/useLanguage";

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage();

  const buttonLabel =
    language === "en" ? "Switch language" : "Переключить язык";

  return (
    <button onClick={toggleLanguage} className={styles.switchBtn}>
      {buttonLabel}
    </button>
  );
};

export default LanguageSwitcher;
