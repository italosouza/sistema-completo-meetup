import styled, { css } from 'styled-components'
import { darken } from 'polished'

const darkenRed = css`
  background: ${darken(0.08, '#f64c75')};
`
const darkenBlue = css`
  background: ${darken(0.08, '#4DBAF9')};
`

export const Button = styled.button`
  padding: 0 20px;
  height: 44px;
  background: ${props => (props.edit ? '#4DBAF9' : '#f64c75')};
  font-weight: bold;
  color: #fff;
  border: 0;
  border-radius: 4px;
  font-size: 16px;
  transition: background 0.2s;

  &:hover {
    ${props => (props.edit ? darkenBlue : darkenRed)}
  }
`
