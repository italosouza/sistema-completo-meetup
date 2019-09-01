import React, { useRef, useState } from 'react'

import PropTypes from 'prop-types'
import { Image } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import logo from '~/assets/logo.png'
import Background from '~/components/Background'
import { signInRequest } from '~/store/modules/auth/actions'

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles'

export default function SignIn({ navigation }) {
  const dispacth = useDispatch()
  const passwordRef = useRef()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const loading = useSelector(state => state.auth.loading)

  function handleSubmit() {
    dispacth(signInRequest(email, password))
  }

  return (
    <Background>
      <Container>
        <Image source={logo} />
        <Form>
          <FormInput
            keyboardType='email-address'
            autoCorrect={false}
            autoCapitalize='none'
            placeholder='Digite seu e-mail'
            returnKeyType='next'
            onSubmitEditing={() => passwordRef.current.focus()}
            value={email}
            onChangeText={setEmail}
          />

          <FormInput
            secureTextEntry
            placeholder='Sua senha secreta'
            ref={passwordRef}
            returnKeyType='send'
            onSubmitEditing={handleSubmit}
            value={password}
            onChangeText={setPassword}
          />
          <SubmitButton onPress={handleSubmit} loading={loading}>
            Entrar
          </SubmitButton>
        </Form>

        <SignLink onPress={() => navigation.navigate('SignUp')}>
          <SignLinkText>Criar conta grátis</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  )
}

SignIn.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
}
