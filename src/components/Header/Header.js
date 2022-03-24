import React from 'react'
import HeaderStyle from '../../styled/Header.style'

const Header = () => {
  return (
    <HeaderStyle>
        <div className='Name'>Name</div>
        <div className='Status'>Status</div>
        <div className='Access'>Access</div>
      </HeaderStyle>
  )
}

export default Header