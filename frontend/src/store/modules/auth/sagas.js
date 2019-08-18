import { all, takeLatest, put, call } from 'redux-saga/effects'

import { toast } from 'react-toastify'
import api from '~/services/api'
import { signInSuccess, signFailure, signUpSuccess } from './actions'
import history from '~/services/history'

export function* signIn({ payload }) {
  try {
    const { email, password } = payload
    const response = yield call(api.post, `/sessions`, { email, password })

    const { token, user } = response.data

    if (!user.provider) {
      toast.error('Este usuário não é um prestador de serviços.')
      return
    }

    yield put(signInSuccess(token, user))
    history.push('/dashboard')
  } catch (err) {
    toast.error('Falha na autenticação, verifique seus dados.')

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
      provider: true,
    })

    toast.success('Cadastro realizado com sucesso.')
    yield put(signUpSuccess())

    history.push('/')
  } catch (err) {
    toast.error('Não foi possível realizar o cadastro.')

    yield put(signFailure())
  }
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
])
