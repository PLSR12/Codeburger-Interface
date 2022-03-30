import React from 'react'

import { ComponentButton } from './styles'

function Button ({children, ...props}) {
  return <ComponentButton {...props} > {children} </ComponentButton>
}

export default Button



