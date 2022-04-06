import React from 'react'
import PropTypes from 'prop-types'

import { Container, ContainerItems } from './styles'

import Orders from './Orders'
import ListProducts from './ListProducts'

import { SideMenuAdmin } from '../../components'
import paths from '../../constants/paths'

export function Admin({ match: { path } }) {
  return (
    <Container>
      <SideMenuAdmin />
      <ContainerItems>
        {path === paths.Order && <Orders />}
        {path === paths.Products && <ListProducts />}
      </ContainerItems>
    </Container>
  )
}

Admin.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string
  })
}
