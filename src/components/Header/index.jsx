import style from './style.module.scss'
import {Container} from './style'
import Switch from 'react-switch'
import {ThemeContext} from 'styled-components'
import {useContext} from 'react'
import {shade} from 'polished'

export function Header({toggleTheme}){
  const  {colors , title} = useContext(ThemeContext)

  return (
    <Container>
      <h2 className={style.textGithub}>Github Profiles</h2>

      <Switch 
        onChange={toggleTheme}
        checked={title == 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={15}
        width={40}
        handleDiameter={20}
        offColor={shade(0.1, colors.toggle)}
        onColor={colors.toggle  }
      />
    </Container>
  )
}