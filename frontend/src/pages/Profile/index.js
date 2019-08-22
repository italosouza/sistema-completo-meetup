import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Form, Input } from '@rocketseat/unform'

import { Container } from './styles'
import { updateProfileRequest } from '~/store/modules/user/actions'

export default function Profile() {
  const dispatch = useDispatch()
  const profile = useSelector(state => state.user.profile)

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data))
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <Input name='name' placeholder='Nome completo' />
        <Input name='email' placeholder='Seu endereço de email' />

        <hr />

        <Input
          type='password'
          name='oldPassword'
          placeholder='Sua senha atual'
        />
        <Input type='password' name='password' placeholder='Nova senha' />
        <Input
          type='password'
          name='confirmPassword'
          placeholder='Confirmação de senha'
        />

        <div>
          <button type='submit'>Salvar perfil</button>
        </div>
      </Form>
    </Container>
  )
}
