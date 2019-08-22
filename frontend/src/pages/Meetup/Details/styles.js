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

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    strong {
      font-size: 32px;
      line-height: 37px;
      font-weight: bold;
    }

    div {
      display: flex;

      button {
        margin-left: 15px;
      }
    }
  }
`
export const Content = styled.div`
  padding-top: 52px;
  overflow: hidden;

  img {
    border-radius: 4px;
    background: #d8d8d8;
  }

  div {
    display: flex;
    justify-content: flex-start;
    font-size: 18px;
    line-height: 32px;
    padding: 25px 0;

    span {
      font-size: 16px;
      line-height: 19px;
      color: rgba(255, 255, 255, 0.6);
      padding: 0 30px;
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
