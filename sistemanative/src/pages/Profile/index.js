import React from 'react'

import PropTypes from 'prop-types'
import { View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import Background from '~/components/Background'

// import { Container } from './styles';

export default function Profile() {
  return (
    <Background>
      <View />
    </Background>
  )
}

function barIcon({ tintColor }) {
  return <Icon name='person' size={20} color={tintColor} />
}

barIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
}

Profile.navigationOptions = {
  tabBarLabel: 'Agendamentos',
  tabBarIcon: barIcon,
}
