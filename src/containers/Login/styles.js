import styled from 'styled-components'

import LoginImg from '../../assets/login/image-login.svg'

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  box-align: center;
`

export const ContainerImg = styled.div`
display: flex;
width: 100%;
height: 100%;
background: url('${LoginImg}');
    
    background-size: cover;
`

export const ContainerItens = styled.div`
  display: flex;
  background-color: #373737;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 47vh;
    height: 17vh;
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
`
export const H1 = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 28px;
  color: #ffffff;
  text-align: center;
  margin-top: 11vh;
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
  max-width: 75vw;
  width: 55vh;
  height: 5vh;
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
  margin-left: -10vw;
  margin-top: 5vh;
  cursor: pointer;
  color: #ffffff;
`
