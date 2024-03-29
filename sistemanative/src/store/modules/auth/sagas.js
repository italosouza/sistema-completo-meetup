import { all, takeLatest, put, call } from 'redux-saga/effects'

import { Alert } from 'react-native'
import api from '~/services/api'
import { signInSuccess, signFailure, signUpSuccess } from './actions'
// import history from '~/services/history'

export function* signIn({ payload }) {
  try {
    const { email, password } = payload
    const response = yield call(api.post, `/sessions`, { email, password })

    const { token, user } = response.data

    api.defaults.headers.Authorization = `Bearer ${token}`

    if (user.provider) {
      Alert.alert(
        'Falha no login',
        'O usuário não pode ser um prestador de serviços.'
      )
      yield put(signFailure())
      return
    }

    yield put(signInSuccess(token, user))
  } catch (err) {
    Alert.alert('Falha no login', 'Dados de autenticação estão incorretos.')
    yield put(signFailure())
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload
    yield call(api.post, `/users`, {
      name,
      email,
      password,
    })

    yield put(signUpSuccess())
    Alert.alert(
      'Cadastro com sucesso',
      'Voce já pode fazer o login na aplicação'
    )
  } catch (err) {
    Alert.alert(
      'Falha no cadastro',
      'Não foi possível realizar o cadastro, verifique seus dados.'
    )

    yield put(signFailure())
  }
}

export function setToken({ payload }) {
  if (!payload) return

  const { token } = payload.auth
  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`
  }
}

export function signOut() {
  // history.push('/')
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOut),
])
