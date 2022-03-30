import React from 'react'
import { toast } from 'react-toastify'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'

import api from '../../services/api'

import Logo from '../../assets/login/logo-codeburger.svg'
import RegisterImg from '../../assets/login/image-cadastro-burger.svg'

import Button from '../../components/Button'

import {
  Container,
  RegisterImage,
  ContainerItens,
  H1,
  Label,
  Input,
  ErrorMessage,
  LogarLink
} from './styles'

function Register () {
  const schema = Yup.object().shape({
    name: Yup.string().required('O seu nome é obrigatório'),
    email: Yup.string()
      .email('Digite um email válido')
      .required('O email é obrigatório'),
    password: Yup.string()
      .required('A senha é obrigatória')
      .min(6, 'A senha deve ter pelo menos 6 digítos'),
    confirmPassword: Yup.string()
      .required('A senha é obrigatória')
      .oneOf([Yup.ref('password')], 'As senhas devem ser iguais')
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
      const { status } = await api.post(
        'users',
        {
          name: clientData.name,
          email: clientData.email,
          password: clientData.password
        },
        { validateStatus: () => true }
      )

      if (status === 201 || status === 200) {
        toast.success('Cadastro criado com sucesso')
      }
      if (status === 409) {
        toast.error('E-mail já cadastrado! Faça Login para continuar')
      } else {
        throw new Error()
      }
    } catch (err) {
      toast.error('Falha no sistema! Tente novamente')
    }
  }

  return (
    <Container>
      <RegisterImage src={RegisterImg} alt='imagem hamburger' />
      <ContainerItens>
        <img src={Logo} alt='logo-codeburger' />
        <H1>Cadastre-se</H1>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label error={errors.name?.message}> Nome</Label>
          <Input
            type='text'
            {...register('name')}
            error={errors.name?.message}
          />
          <ErrorMessage> {errors.name?.message}</ErrorMessage>

          <Label error={errors.email?.message}> Email</Label>
          <Input
            type='email'
            {...register('email')}
            error={errors.email?.message}
          />
          <ErrorMessage> {errors.email?.message}</ErrorMessage>

          <Label error={errors.password?.message}> Senha</Label>
          <Input
            type='password'
            {...register('password')}
            error={errors.password?.message}
          />
          <ErrorMessage> {errors.password?.message}</ErrorMessage>

          <Label error={errors.confirmPassword?.message}>Confirme Senha</Label>
          <Input
            type='password'
            {...register('confirmPassword')}
            error={errors.confirmPassword?.message}
          />
          <ErrorMessage> {errors.confirmPassword?.message}</ErrorMessage>

          <Button type='submit' style={{ marginTop: 20, marginLeft: 104 }}>
            Entrar
          </Button>
        </form>
        <LogarLink>
          Já possui conta? {''}
          <Link style={{ color: 'white' }} to='/login'>
            Entre
          </Link>
        </LogarLink>
      </ContainerItens>
    </Container>
  )
}

export default Register
