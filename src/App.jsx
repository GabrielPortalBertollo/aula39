import { useState, createContext, useContext } from 'react'
import "./app.css"

const PreferencesContext = createContext()

function App() {

  const [ preferences, setPreferences ] = useState({ theme: 'light', language: 'Portugês',texts:["Tema utilizado - ","Idioma: "]})

  const toggleTheme = () => {
    setPreferences({
      ...preferences,
      theme: preferences.theme === 'light' ? 'dark' : 'light'})
  }
  const changeTexts= (language) =>{
    let text=[];
    if(language=="Portugês"){text=["Tema utilizado - ","Idioma: "]}
    else if(language=="English"){text=["Theme used - ","Language: "]}
    else if(language=="Español"){text=["Tema utilizado - ","Idioma: "]}
    return text;
  }

  const changeLanguage = (language) => {
    const text=changeTexts(language);
    setPreferences(currentLanguage => ({
      ...currentLanguage,
      language: language,
      texts:text
    }))
  }

  return (
    <>
      <PreferencesContext.Provider value={{ preferences, toggleTheme, changeLanguage }}>
          <div>
            <Toolbar />
            <button onClick={toggleTheme}>Trocar o tema</button>
            <select onChange={(e) => changeLanguage(e.target.value)}>
              <option value="Portugês">Português</option>
              <option value="English">Inglês</option>
              <option value="Español">Espanhol</option>
            </select>
          </div>
      </PreferencesContext.Provider>

    </>
  )
}

function Toolbar() {
  const { preferences } = useContext(PreferencesContext)

  return (
    <div style={{background: preferences.theme === 'dark' ? '#1b1b1b' : '#c3c3c3', color: preferences.theme === 'dark' ? '#ffffff' : '#000000'}}>
      <p>{preferences.texts[0]}{preferences.theme}</p>
      <p>{preferences.texts[1]} {preferences.language}</p>
    </div>
  )
}

export default App
