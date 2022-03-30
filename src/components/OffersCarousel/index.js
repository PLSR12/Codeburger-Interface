import React, { useEffect, useState } from 'react'

import OffersText from '../../assets/home/ofert-text.png'

import {
  Container,
  OffersImage,
  ContainerItems,
  Image,
  Button,
  H1,
  H2
} from './styles'

import Carousel from 'react-elastic-carousel'

import api from '../../services/api'

function OffersCarousel () {
  const [offers, setOffers] = useState([])

  useEffect(() => {
    async function loadOffers () {
      const { data } = await api.get('products')

      const onlyOffers = data.filter(product => product.offer)

      setOffers(onlyOffers)
    }

    loadOffers()
  }, [])

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 600, itemsToShow: 3 },
    { width: 900, itemsToShow: 4 },
    { width: 1300, itemsToShow: 5 }
  ]

  return (
    <Container>
      <OffersImage src={OffersText} alt='banner da home' />

      <Carousel
        itemsToShow={4}
        style={{ width: '90%' }}
        breakPoints={breakPoints}
      >
        {offers &&
          offers.map(product => (
            <ContainerItems key={product.id}>
              <Image src={product.url} alt='foto da oferta' />
              <H1>{product.name}</H1>
              <H2>{product.price}</H2>

              <Button> Peça Agora</Button>
            </ContainerItems>
          ))}
      </Carousel>
    </Container>
  )
}

export default OffersCarousel
