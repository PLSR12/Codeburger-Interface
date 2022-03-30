import React from 'react'

import BannerHome from '../../assets/home/banner-homepage.svg'

import { Container, HomeImage } from './styles'

import CategoryCarousel from '../../components/CategoryCarousel'
import OffersCarousel from '../../components/OffersCarousel'

function Home () {
  return (
    <Container>
      <HomeImage src={BannerHome} alt='banner da home'/>
      <CategoryCarousel />
      <OffersCarousel />
    </Container>
  )
}

export default Home
