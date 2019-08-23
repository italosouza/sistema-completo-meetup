import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Form, Input } from '@rocketseat/unform'
import PropTypes from 'prop-types'

import { Wrapper, Container, Content, ImageHolder } from './styles'
import { Button } from '~/styles/button'
import api from '~/services/api'
import { formatDate } from '~/util/format'
import { meetupEditRequest } from '~/store/modules/meetup/actions'

export default function New({ match }) {
  const dispatch = useDispatch()

  const { id } = match
  const [meetup, setMeetup] = useState({})

  useEffect(() => {
    async function loadMeetup() {
      const response = await api.get(`/meetup/${id}`)
      const data = {
        ...response.data,
        timeFormatted: formatDate(response.data.date, "d 'de' MMMM, 'às' H'h'"),
      }

      setMeetup(data)
    }

    loadMeetup()
  }, [id])

  function handleSubmit(data) {
    dispatch(meetupEditRequest(data))
  }

  return (
    <Wrapper>
      <Container>
        <ImageHolder>Selecionar Imagem</ImageHolder>

        <Content>
          <Form initialData={meetup} onSubmit={handleSubmit}>
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

New.defaultProps = {
  match: {
    id: null,
  },
}

New.propTypes = {
  match: PropTypes.shape({
    id: PropTypes.number,
  }),
}
