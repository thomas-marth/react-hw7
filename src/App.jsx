import { LanguageProvider } from "./context/LanguageContext";
import LanguageSwitcher from "./components/languageSwitcher";
import TextDisplay from "./components/textDisplay";

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
