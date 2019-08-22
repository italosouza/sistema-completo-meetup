import styled from 'styled-components'
import { darken } from 'polished'

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.3);

  padding: 0 30px;
`
export const Content = styled.div`
  height: 92px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    a {
      font-weight: bold;
      color: #7159c1;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`
export const Profile = styled.div`
  display: flex;
  align-items: center;

  div {
    text-align: right;
    margin-right: 30px;

    strong {
      display: block;
      color: #fff;
      font-size: 14px;
      line-height: 16px;
    }

    a {
      display: block;
      margin-top: 5px;
      font-size: 12px;
      color: #999;
    }
  }

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

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
`
