import React from 'react'

import { Container, ItemContainer, ListLink } from './styles'
import listLinks from './menu-list'

export function SideMenuAdmin () {
  return (
    <Container>
      <hr></hr>
      {listLinks.map(item => (
        <ItemContainer key={item.id}>
          <item.icon className='icon'/>
          <ListLink to={item.link}>{item.label} </ListLink>
        </ItemContainer>
      ))}
      <hr></hr>
    </Container>
  )
}
