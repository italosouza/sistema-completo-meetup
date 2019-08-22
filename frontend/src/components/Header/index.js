import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import logo from '~/assets/images/logo.svg'

import { Container, Content, Profile } from './styles'

export default function Header() {
  const profile = useSelector(state => state.user.profile)

  return (
    <Container>
      <Content>
        <nav>
          <Link to='/dashboard'>
            <img src={logo} alt='Logo' />
          </Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to='/profile'>Meu perfil</Link>
            </div>
            <button type='button'>Sair</button>
          </Profile>
        </aside>
      </Content>
    </Container>
  )
}
