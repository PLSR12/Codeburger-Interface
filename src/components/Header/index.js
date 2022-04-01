import React from 'react'

import Cart from '../../assets/Header/Cartheader.svg'
import Person from '../../assets/Header/Personheader.png'

import {
  Container,
  ContainerLeft,
  ContainerText,
  ContainerRight,
  PageLink,
  Line,
  PageLinkExit
} from './styles'

export function Header () {
  return (
    <Container>
      <ContainerLeft>
        <PageLink> Home </PageLink>
        <PageLink> Ver produtos </PageLink>
      </ContainerLeft>
      <ContainerRight>
        <PageLink>
          <img src={Cart} alt='carrinho' />
        </PageLink>
        <Line> </Line>
        <PageLink>
          <img src={Person} alt='boneco' />
        </PageLink>

        <ContainerText>
          <p> Olá, Pedro </p>
          <PageLinkExit> Sair </PageLinkExit>
        </ContainerText>
      </ContainerRight>
    </Container>
  )
}
