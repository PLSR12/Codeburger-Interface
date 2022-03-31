import React from 'react'
import { toast } from 'react-toastify'
import { useForm } from 'react-hook-form'
import { Link, useHistory } from 'react-router-dom'

import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import api from '../../services/api'

import { useUser } from '../../hooks/UserContext'

import LoginImg from '../../assets/login/image-login.svg'
import Logo from '../../assets/login/logo-codeburger.svg'

import { Button } from '../../components'

import {
  Container,
  LoginImage,
  ContainerItens,
  H1,
  Label,
  Input,
  ErrorMessage,
  CadastrarLink
} from './styles'

export function Login () {
  const history = useHistory()
  const { putUserData } = useUser()

  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Digite um email válido')
      .required('O email é obrigatório'),
    password: Yup.string()
      .required('A senha é obrigátoria')
      .min(6, 'A senha deve ter pelo menos 6 digítos')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async clientData => {
    try {
      const { data } = await api.post('sessions', {
        email: clientData.email,
        password: clientData.password
      })
      toast.success('Login Efetuado!')
      putUserData(data)
      history.push('/home')
    } catch (err) {
      toast.error('Verifique seus Dados!')
    }
  }

  return (
    <Container>
      <LoginImage src={LoginImg} alt='imagem hamburger' />
      <ContainerItens>
        <img src={Logo} alt='logo-codeburger' />
        <H1>Login</H1>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label> Email</Label>
          <Input
            type='email'
            {...register('email')}
            error={errors.email?.message}
          />
          <ErrorMessage> {errors.email?.message}</ErrorMessage>

          <Label> Senha</Label>
          <Input
            type='password'
            {...register('password')}
            error={errors.password?.message}
          />
          <ErrorMessage> {errors.password?.message}</ErrorMessage>

          <Button type='submit' style={{ marginTop: 66, marginLeft: 104 }}>
            Entrar
          </Button>
        </form>
        <CadastrarLink>
          Não possui conta? {''}
          <Link style={{ color: 'white' }} to='/cadastro'>
            Se cadastre
          </Link>
        </CadastrarLink>
      </ContainerItens>
    </Container>
  )
}
