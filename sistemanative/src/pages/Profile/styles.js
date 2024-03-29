import styled from 'styled-components/native'
import Input from '~/components/Input'
import Button from '~/components/Button'

export const Container = styled.SafeAreaView`
  flex: 1;
`

export const Title = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  align-self: center;
  margin-top: 30px;
`

export const Form = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 30 },
})`
  align-self: stretch;
`

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`
export const SubmitButton = styled(Button)`
  margin-top: 5px;
  height: 50px;
`

export const LogoutButton = styled(Button)`
  margin-top: 15px;
  background: #d44059;
  height: 42px;
  font-size: 16px;
  line-height: 19px;
`
export const SignLink = styled.TouchableOpacity`
  margin-top: 20px;
`
export const SignLinkText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`
export const Separator = styled.View`
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
  margin: 20px 0 30px;
`
