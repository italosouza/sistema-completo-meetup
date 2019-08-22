import { all, takeLatest, call, put } from 'redux-saga/effects'
import { toast } from 'react-toastify'
import api from '~/services/api'
import { meetupDetailSuccess, meetupFailure } from './actions'

export function* meetupDetail() {
  try {
    const response = yield call(api.get, '/organizing')

    yield put(meetupDetailSuccess(response.data))
  } catch (err) {
    toast.error('Não foi possível carregar dados do Meetup!')
    yield put(meetupFailure())
  }
}

export default all([takeLatest('@meetup/MEETUP_DETAIL_REQUEST', meetupDetail)])
