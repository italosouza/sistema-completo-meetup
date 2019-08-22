import styled from 'styled-components'
import { darken } from 'polished'

export const Container = styled.div`
  max-width: 900px;
  margin: 50px auto;

  display: flex;
  flex-direction: column;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      padding: 0 20px;
      height: 44px;
      background: #f64c75;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.08, '#f64c75')};
      }
    }

    strong {
      color: #fff;
      font-size: 32px;
      margin: 0 15px;
    }
  }

  ul {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 10px;
    margin-top: 70px;
  }
`

export const Time = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 20px 30px;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.1);
  cursor: pointer;

  opacity: ${props => (props.past ? 0.5 : 1)};

  strong {
    color: #fff;
    font-size: 18px;
    line-height: 21px;
    font-weight: bold;
  }

  span {
    margin-top: 3px;
    color: rgba(255, 255, 255, 0.6);
  }
`
