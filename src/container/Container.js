import React from 'react'
import ContainerStyle from '../styled/Container.style'

const Container = (props) => {
  return (
    <ContainerStyle>{props.children}</ContainerStyle>
  )
}

export default Container