import React from 'react'

import BannerHome from '../../assets/home/banner-homepage.svg'

import { OffersCarousel, CategoryCarousel, Header } from '../../components'

import { Container, HomeImage } from './styles'

export function Home () {
  return (
    <Container>
      <Header />
      <HomeImage src={BannerHome} alt='banner da home' />
      <CategoryCarousel />
      <OffersCarousel />
    </Container>
  )
}
