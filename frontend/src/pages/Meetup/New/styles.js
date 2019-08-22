import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 0 30px;
`
export const Container = styled.div`
  max-width: 900px;
  margin: 50px auto;

  color: #fff;

  display: flex;
  flex-direction: column;
`

export const Content = styled.div`
  padding-top: 20px;

  form {
    display: flex;
    flex-direction: column;

    input {
      background: rgba(0, 0, 0, 0.2);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.5);
      }
    }

    div {
      display: flex;
      padding: 20px 0;
      justify-content: flex-end;

      button {
        margin-left: 15px;
      }
    }
  }
`
export const ImageHolder = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 300px;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.4);
  color: rgba(255, 255, 255, 0.3);
  font-size: 20px;
`
