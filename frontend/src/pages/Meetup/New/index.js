import React from 'react'
import { Form, Input } from '@rocketseat/unform'

import { Wrapper, Container, Content, ImageHolder } from './styles'
import { Button } from '~/styles/button'

export default function New() {
  // const dispatch = useDispatch()
  // const profile = useSelector(state => state.user.profile)

  function handleSubmit(data) {
    // dispatch(updateProfileRequest(data))
  }

  return (
    <Wrapper>
      <Container>
        <ImageHolder>Selecionar Imagem</ImageHolder>

        <Content>
          <Form onSubmit={handleSubmit}>
            <Input name='title' placeholder='Titulo do Meetup' />
            <Input name='description' placeholder='Descrição completa' />

            <Input type='date' name='date' placeholder='Data do meetup' />
            <Input name='location' placeholder='Localização' />

            <div>
              <Button type='submit'>Salvar meetup</Button>
            </div>
          </Form>
        </Content>
      </Container>
    </Wrapper>
  )
}
