import React from 'react'
import Navi from '../Components/Navi'
import Products from '../Components/Products'
import Reveal from 'react-reveal'

const ProductsScreen = () => {
  return (
    <>
      <Reveal effect='animate__animated animate__fadeInUp' cascade>
        <Products />
      </Reveal>
    </>
  )
}

export default ProductsScreen
