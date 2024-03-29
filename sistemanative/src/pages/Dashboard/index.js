import React, { useEffect, useState } from 'react'

import { Alert } from 'react-native'
import { withNavigationFocus } from 'react-navigation'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/MaterialIcons'

import Background from '~/components/Background'

import Event from '~/components/Event'

import { Container, List } from './styles'
import api from '~/services/api'

function Dashboard({ isFocused }) {
  const [meetups, setMeetups] = useState([])
  const [refreshing, setRefreshing] = useState(false)
  const [date] = useState(new Date())
  // const [page, setPage] = useState(0)

  async function loadMeetups(refresh = false) {
    try {
      setRefreshing(true)
      const curPage = refresh ? 0 : 1
      const response = await api.get('/meetups', {
        params: {
          page: curPage,
        },
      })

      setMeetups(response.data)
    } catch (err) {
      Alert.alert('Aviso', 'Não foi possível carregar os dados.')
    } finally {
      setRefreshing(false)
    }
  }

  useEffect(() => {
    loadMeetups()
  }, [date, isFocused])

  async function handleSubscribe(id) {
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
        {/* <DateInput date={date} onChange={setDate} /> */}

        <List
          data={meetups}
          onRefresh={() => refreshList()}
          refreshing={refreshing}
          onEndReachedThreshold={0.2}
          onEndReached={() => loadMeetups()}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Event onSubscribe={handleSubscribe} data={item} />
          )}
        />
      </Container>
    </Background>
  )
}

Dashboard.propTypes = {
  isFocused: PropTypes.bool.isRequired,
}

function barIcon({ tintColor }) {
  return <Icon name='event' size={20} color={tintColor} />
}

barIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Meetups',
  tabBarIcon: barIcon,
}

export default withNavigationFocus(Dashboard)
