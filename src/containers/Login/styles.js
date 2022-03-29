import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  max-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LoginImage = styled.img`
  max-height: 110vh;
`

export const ContainerItens = styled.div`
  background-color: #373737;
  width: 100vw;
  height: 100vh;
  padding: 25px 75px;
  flex-direction: column;
  display: flex;
  justify-content: center;

  img {
    width: 338px;
    height: 125px;
  }

  form {
    display: flex;
    flex-direction: column;
  }
`
export const H1 = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 28px;
  color: #ffffff;
  text-align: center;
  margin-top: 80px;
`

export const Label = styled.p`
  margin-top: 17px;
  margin-bottom: 5px;
  margin-left: 20px;

  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 14px;

  color: #ffffff;
`

export const Input = styled.input`
  width: 390px;
  height: 38px;

  background: #ffffff;
  box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
  border-radius: 5px;
  outline: none;
  border: ${props => (props.error ? '2px solid #cc1717' : 'none')};
`

export const ErrorMessage = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  margin-top: 5px;
  margin-left: 5px;
  color: #cc1717;
`


export const CadastrarLink = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;

  margin-left: 110px;
  margin-top: 32px;
  cursor: pointer;

  color: #ffffff;
`
