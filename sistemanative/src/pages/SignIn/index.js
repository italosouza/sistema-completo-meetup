import React from 'react'

import { View, Text } from 'react-native'

import Background from '~/components/Background'
import Input from '~/components/Input'
import Button from '~/components/Button'
// import { Container } from './styles';

export default function SignIn() {
  return (
    <Background>
      <View>
        <Text>SignIn</Text>
        <Input icon='call' placeholder='Digite seu nome' />
        <Button>teste</Button>
      </View>
    </Background>
  )
}
