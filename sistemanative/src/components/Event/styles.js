import styled from 'styled-components/native'
import Button from '~/components/Button'

export const Wrapper = styled.View`
  padding-bottom: 20px;
`
export const Container = styled.View`
  background: #fff;
  border-radius: 4px;
  padding-bottom: 20px;

  opacity: ${props => (props.past ? 0.6 : 1)};
`

export const Cover = styled.Image`
  border-radius: 4px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  min-height: 150px;
`

export const Title = styled.Text`
  padding: 20px 18px 0;
  font-size: 18px;
  line-height: 21px;
  font-weight: bold;
  color: #000;
`

export const Description = styled.View`
  padding: 0px 20px 0 40px;
`

export const Text = styled.Text`
  padding-top: 11px;
  font-size: 13px;
  line-height: 15px;
  color: #999;
`

export const Subscribe = styled.View`
  padding: 15px 20px 0;
`

export const ConfirmButton = styled(Button)``
