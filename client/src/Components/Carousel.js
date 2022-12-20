import React from 'react'
// import axios from 'axios'
// import asyncHandler from 'async-handler'
import { Container } from 'react-bootstrap'
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit'
import 'animate.css'
import Prod1 from '../Images/webp/product1.webp'
import Prod2 from '../Images/webp/product2.webp'
import Prod3 from '../Images/webp/product3.webp'
// import { Fade } from 'react-reveal'

import '../Styles/Carousel.css'
// import ProductCarousel from './ProductCarousel'

const Carousel = () => {
  // const [products, setProducts] = useState([])

  // useEffect(() => {
  //   const fetchProducts = asyncHandler(async () => {
  //     const { data } = await axios.get('/api/products')
  //     setProducts(data)
  //   })
  //   fetchProducts()
  // }, [])
  return (
    <div className='intro pt-5' id='intro'>
      <Container>
        {/* <Fade bottom> */}
        <MDBCarousel className='carousel' interval='3000'>
          <MDBCarouselItem
            className='w-100 d-block'
            itemId={1}
            src={Prod1}
            alt='Lauryns Next door Cottage Lady Bug Cake'
          >
            {' '}
            <div className='text-black'>
              <h1 className='ctext'>Lady Bug Cake</h1>
            </div>
          </MDBCarouselItem>
          <MDBCarouselItem
            className='w-100 d-block'
            itemId={2}
            src={Prod2}
            alt='Lauryns Next door Cottage Celeste XOXO Cake'
          >
            {' '}
            <div className='text-black'>
              <h1 className='ctext'>Celeste's XOXO Cake</h1>{' '}
            </div>
          </MDBCarouselItem>
          <MDBCarouselItem
            className='w-100 d-block'
            itemId={3}
            src={Prod3}
            alt='Lauryns Next door Cottage Halloween Treat Box'
          >
            <div className='text-black'>
              <h1 className='ctext'>Halloween Treat Box</h1>
            </div>
          </MDBCarouselItem>
        </MDBCarousel>

        {/*<MDBCarousel className='bg-dark'>
          {products &&
            products.map((product) => (
              <MDBCarousel.Item>
                {/* <Link to={`/product/${product._id}`}> 
                <MDBCarouselItem src={product.img} alt={product.title} fluid />
                <MDBCarouselItem className='carousel-caption'>
                  <h3>{product.name}</h3>
                </MDBCarouselItem>
                {/* </Link> 
              </MDBCarousel.Item>
            ))}
        </MDBCarousel>
            */}
        {/* </Fade> */}
      </Container>
    </div>
  )
}

export default Carousel
