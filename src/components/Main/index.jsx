import style from './style.module.scss'
import { useState } from 'react'
import axios from 'axios'

import {Container} from './style'

export function Main() {

  const [username , setUsername] = useState('')
  const [repository , setRepository] = useState([])
  const [user , setUser] = useState([])

  async function handleClick(event){
    event.preventDefault()

    const response = await axios.get(`https://api.github.com/users/${username}/repos?per_page=10`)
    const responseUser = await axios.get(`https://api.github.com/users/${username}`)
    setUser([responseUser.data])
    setRepository(response.data)

  }

  return(
    <Container>

    <main>

      <form action="">
        <input 
          className={style.inputName} 
          type="text" 
          placeholder='Github Username'
          onChange={value => setUsername(value.target.value)}
          value={username}
        />
        
        <button onClick={handleClick}>Search</button>
      </form>
        <div className={style.repos}>
          {
            user.map(data => {
              return(
                <img src={data.avatar_url} alt="" />
              )
            })
          }
        <ul>
            {
              
              repository.map(repo => {

                return (
                  <li key={repo.id} className={style.repo}>{repo.name}</li>
                )
              })
            }
        </ul>
      </div>
    </main>
    </Container>

  )
}