import React, { useState, useEffect } from 'react'

import { Container, Time } from './styles'
import api from '~/services/api'
import { formatDate } from '~/util/format'
import history from '~/services/history'

export default function Dashboard() {
  const [meetup, setMeetup] = useState([])

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('meetups')
      const data = response.data.map(meet => {
        return {
          ...meet,
          timeFormatted: formatDate(meet.date, "d 'de' MMMM, 'às' H'h'"),
        }
      })
      setMeetup(data)
    }

    loadMeetups()
  }, [])

  function handleMeetupNew() {
    history.push('/meetup/new')
  }

  function handleMeetupDetails(id) {
    history.push(`/meetup/${id}`)
  }

  return (
    <Container>
      <header>
        <strong>Meus meetups</strong>
        <button type='button' onClick={handleMeetupNew}>
          Novo meetup
        </button>
      </header>

      <ul>
        {meetup.map(item => (
          <Time
            key={item.id}
            past={item.past}
            onClick={() => handleMeetupDetails(item.id)}
          >
            <strong>{item.description}</strong>
            <span>{item.timeFormatted}</span>
          </Time>
        ))}
      </ul>
    </Container>
  )
}
