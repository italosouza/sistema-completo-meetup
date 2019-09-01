import React, { useMemo } from 'react'

import PropTypes from 'prop-types'

import {
  Wrapper,
  Container,
  Cover,
  Title,
  Description,
  Text,
  Subscribe,
  ConfirmButton,
} from './styles'

import { formatDate } from '~/util/format'

export default function Event({ data, onSubscribe, onCancel }) {
  const dateFormatted = useMemo(() => {
    return formatDate(data.date, "d 'de' MMMM, 'às' H'h'")
  }, [data.date])

  return (
    <Wrapper>
      <Container past={data.past}>
        <Cover source={{ uri: 'https://placehold.it/470x150' }} />
        <Title>{data.title}</Title>
        <Description>
          <Text>{dateFormatted}</Text>
          <Text>{data.location}</Text>
          <Text>Organizador: {data.User.name}</Text>
        </Description>
        <Subscribe>
          {onSubscribe && (
            <ConfirmButton onPress={() => onSubscribe(data.id)}>
              Realizar inscrição
            </ConfirmButton>
          )}

          {onCancel && (
            <ConfirmButton onPress={() => onCancel(data.id)}>
              Cancelar inscrição
            </ConfirmButton>
          )}
        </Subscribe>
      </Container>
    </Wrapper>
  )
}

Event.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    date: PropTypes.string,
    location: PropTypes.string,
    past: PropTypes.bool,
    User: PropTypes.shape({
      name: PropTypes.string,
    }),
  }).isRequired,
  onSubscribe: PropTypes.func,
  onCancel: PropTypes.func,
}

Event.defaultProps = {
  onSubscribe: null,
  onCancel: null,
}
