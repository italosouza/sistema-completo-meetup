export function meetupDetailRequest() {
  return {
    type: '@meetup/MEETUP_DETAIL_REQUEST',
  }
}

export function meetupDetailSuccess(data) {
  return {
    type: '@meetup/MEETUP_DETAIL_SUCCESS',
    payload: { data },
  }
}

export function meetupFailure() {
  return {
    type: '@meetup/MEETUP_FAILURE',
  }
}
