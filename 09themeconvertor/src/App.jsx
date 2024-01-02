import { useEffect, useState } from 'react'
import './App.css'
import { themeprovider } from './context/theme'
import Card from './componenets/card'
import Button from './componenets/button'




function App() {
  const [themeMode, setThemeMode] = useState("light")

  const lighttheme = () => {
    setThemeMode("light")
  }

  const darktheme = () => {
    setThemeMode("dark")
  }

  // actual change in theme

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])
  

  return (
    <themeprovider value={{themeMode, lighttheme, darktheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <Button/>
              </div>

              <div className="w-full max-w-sm mx-auto">
                  < Card/>
              </div>
          </div>
      </div>
    </themeprovider>
  )
}

export default App