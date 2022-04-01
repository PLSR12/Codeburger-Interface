import React from 'react'

import CartBanner from '../../assets/Cart/CartImage.svg'

import { CartItems, CartResume,Header } from '../../components'

import { Container, CartImage, Wrapper } from './styles'

export function Cart () {
  return (
    <Container>
      <Header/>
      <CartImage src={CartBanner} alt='banner carrinho' />
      <Wrapper>
        <CartItems />
        <CartResume />
      </Wrapper>
    </Container>
  )
}
