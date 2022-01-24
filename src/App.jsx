import style from './App.module.scss'


import GlobalStyle from './global'
import {ThemeProvider} from 'styled-components'
import light from './styles/themes/light' 
import dark from './styles/themes/dark' 
import { Header } from './components/Header'
import { Main } from './components/Main'

import usePersistedState from './utils/usePersistedState'


function App() {


  const [theme , setTheme] = usePersistedState('theme', light)

  const toggleTheme = () => {
    setTheme(theme.title == 'light'  ? dark  : light ) 
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <div className={style .AppWrapperContainer}>
        <Header  toggleTheme={toggleTheme}/>
        <Main/>
      </div>
    </ThemeProvider>
  )
}

export default App
