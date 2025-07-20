import { useState } from "react";
import LanguageSwitcher from "./components/languageSwitcher";
import TextDisplay from "./components/textDisplay";
import LanguageContext from "./contexts/LanguageContext";

function App() {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "ru" : "en"));
  };

  const contextValue = {
    language,
    toggleLanguage,
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      <div className="container">
        <TextDisplay />
        <LanguageSwitcher />
      </div>
    </LanguageContext.Provider>
  );
}

export default App;
