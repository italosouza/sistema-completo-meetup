import React, { useEffect, useState } from 'react'

import { Alert } from 'react-native'
import { withNavigationFocus } from 'react-navigation'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/MaterialIcons'

import Background from '~/components/Background'

import Event from '~/components/Event'

import { Container, List } from './styles'
import api from '~/services/api'

function Subscriptions({ isFocused }) {
  const [meetups, setMeetups] = useState([])
  const [refreshing, setRefreshing] = useState(false)

  async function loadMeetups(refresh = false) {
    try {
      setRefreshing(true)
      const curPage = refresh ? 0 : 1
      const response = await api.get('/subscriptions', {
        params: {
          page: curPage,
        },
      })

      const data = response.data.map(item => {
        return {
          id: item.Meetup.id,
          past: item.Meetup.past,
          title: item.Meetup.title,
          location: item.Meetup.location,
          date: item.Meetup.date,
          User: {
            name: '',
          },
        }
      })

      setMeetups(data)
    } catch (err) {
      Alert.alert('Aviso', 'Não foi possível carregar os dados.')
    } finally {
      setRefreshing(false)
    }
  }

  useEffect(() => {
    loadMeetups()
  }, [isFocused])

  async function handleCancel(id) {
    try {
      setRefreshing(true)

      await api.post(`/meetups/${id}/subscriptions`)
    } catch (err) {
      Alert.alert(
        'Aviso',
        'Não foi possível confirmar a inscrição, verifique se sua presença já foi confirmada.'
      )
    } finally {
      setRefreshing(false)
    }
  }

  function refreshList() {
    loadMeetups(true)
  }

  return (
    <Background>
      <Container>
        <List
          data={meetups}
          onRefresh={() => refreshList()}
          refreshing={refreshing}
          onEndReachedThreshold={0.2}
          onEndReached={() => loadMeetups()}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Event onCancel={handleCancel} data={item} />
          )}
        />
      </Container>
    </Background>
  )
}

Subscriptions.propTypes = {
  isFocused: PropTypes.bool.isRequired,
}

function barIcon({ tintColor }) {
  return <Icon name='add' size={20} color={tintColor} />
}

barIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
}

Subscriptions.navigationOptions = {
  tabBarLabel: 'Inscrições',
  tabBarIcon: barIcon,
}

export default withNavigationFocus(Subscriptions)
