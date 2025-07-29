import React, { useContext } from 'react'
import Homepage from './pages/Homepage'
import { ThemeContext, ThemeProvider } from './context/theme'
import { ObjectProvider } from './context/object';


  const ThemedApp = () => {
    const { theme } = useContext(ThemeContext);
  
    return (
      <div className={theme ? 'bg-neutral-200 text-indigo-950 min-h-screen p-10' : 'bg-indigo-950 text-cyan-50 min-h-screen p-5 md:p-10'}>
        <Homepage />
      </div>
    )
  }
  
  const App = () => {
    return (
      <ThemeProvider>
        <ObjectProvider>
        <ThemedApp />
        </ObjectProvider>
      </ThemeProvider>
    )
  }

export default App