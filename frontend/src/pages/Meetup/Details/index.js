import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { Wrapper, Container, Content, ImageHolder } from './styles'
import { Button } from '~/styles/button'

import api from '~/services/api'
import { formatDate } from '~/util/format'
import history from '~/services/history'

export default function Details({ match }) {
  const { id } = match.params
  const [meetup, setMeetup] = useState({})

  useEffect(() => {
    async function loadDetails() {
      const response = await api.get(`/meetups/${id}`)
      const data = {
        ...response.data,
        timeFormatted: formatDate(response.data.date, "d 'de' MMMM, 'às' H'h'"),
      }

      setMeetup(data)
    }

    loadDetails()
  }, [id])

  function handleCancel() {
    history.push('/dashboard')
  }

  function handleEdit() {
    history.push(`/meetup/edit/${id}`)
  }

  return (
    <Wrapper>
      <Container>
        <header>
          <strong>{meetup.title}</strong>
          <div>
            <Button type='button' edit onClick={handleEdit}>
              Editar
            </Button>
            <Button type='button' onClick={handleCancel}>
              Cancelar
            </Button>
          </div>
        </header>

        <Content>
          {meetup.File ? (
            <img src={meetup.File.url} alt={meetup.title} />
          ) : (
            <ImageHolder />
          )}
          <div>{meetup.description}</div>
          <div>
            <span>{meetup.timeFormatted}</span>
            <span>{meetup.location}</span>
          </div>
        </Content>
      </Container>
    </Wrapper>
  )
}

Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
}
