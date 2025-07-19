import { useLanguage } from "../../context/LanguageContext";
import styles from "./style.module.css";

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage();

  // подпись кнопки в зависимости от текущего языка
  const nextLabel =
    language === "en" ? "Переключить на русский" : "Switch to English";

  return (
    <button onClick={toggleLanguage} className={styles.switchBtn}>
      {nextLabel}
    </button>
  );
};

export default LanguageSwitcher;
