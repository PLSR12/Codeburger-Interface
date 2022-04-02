import styled from 'styled-components'

import RegisterImg from '../../assets/login/image-cadastro-burger.svg'

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
`

export const ContainerImage = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background: url('${RegisterImg}');  
  background-size: cover;
`

export const ContainerItens = styled.div`
  display: flex;
  background-color: #373737;
  width: 70vw;
  height: 100vh;
  padding: 16vh 19vh;
  flex-direction: column;
  justify-content: center;
  img {
    display: flex;
    width: 47vh;
    height: 17vh;
  }
  form {
    display: flex;
    flex-direction: column;
  }
`
export const H1 = styled.h1`
  font-weight: 500;
  font-size: 30px;
  line-height: 28px;
  color: #ffffff;
  text-align: center;
  margin-top: 5vh;
`

export const Label = styled.p`
  margin-top: ${props => (props.error ? '10px' : '17px')};
  margin-bottom: 5px;
  margin-left: 2vh;

  font-weight: 500;
  font-size: 15px;
  line-height: 14px;

  color: #ffffff;
`

export const Input = styled.input`
  display: flex;
  width: 51vh;
  height: 5vh;

  background: #ffffff;
  box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
  border-radius: 5px;
  outline: none;
  border: ${props => (props.error ? '2px solid #cc1717' : 'none')};
`

export const ErrorMessage = styled.p`
  font-size: 14px;
  margin-top: 5px;
  margin-left: 5px;
  color: #cc1717;
`

export const LoginLink = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  margin-left: 2vh;
  margin-top: 5vh;
  cursor: pointer;

  color: #ffffff;
`
