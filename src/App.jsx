import LanguageSwitcher from "./components/languageSwitcher";
import TextDisplay from "./components/textDisplay";
import { LanguageProvider } from "./contexts/LanguageContext.jsx";

function App() {
  return (
    <LanguageProvider>
      <div className="container">
        <TextDisplay />
        <LanguageSwitcher />
      </div>
    </LanguageProvider>
  );
}

export default App;
