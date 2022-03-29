import React from 'react'
import { useForm } from 'react-hook-form'

import LoginImg from '../../assets/login/image-login.svg'
import Logo from '../../assets/login/logo-codeburger.svg'

import {
  Container,
  LoginImage,
  ContainerItens,
  H1,
  Label,
  Input,
  Button,
  CadastrarLink
} from './styles'

function Login () {
  return (
    <Container>
      <LoginImage src={LoginImg} alt='imagem hamburger' />
      <ContainerItens>
        <img src={Logo} alt='logo-codeburger' /> ;<H1>Login</H1>
        <Label> Email</Label>
        <Input />
        <Label> Senha</Label>
        <Input />
        <Button> Entrar </Button>
        <CadastrarLink>
          {' '}
          Não possui conta?
          <p />
          Se cadastre{' '}
        </CadastrarLink>
      </ContainerItens>
    </Container>
  )
}

export default Login
