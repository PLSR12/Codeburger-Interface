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
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm()

  const onSubmit = data => console.log(data)
  return (
    <Container>
      <LoginImage src={LoginImg} alt='imagem hamburger' />
      <ContainerItens>
        <img src={Logo} alt='logo-codeburger' />
        <H1>Login</H1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Label> Email</Label>
          <Input type="email" {...register('email')} />

          <Label> Senha</Label>
          <Input type="password" {...register('password')} />

          <Button type='submit'> Entrar </Button>
        </form>
        <CadastrarLink>
          Não possui conta?
          <p />
          Se cadastre
        </CadastrarLink>
      </ContainerItens>
    </Container>
  )
}

export default Login
