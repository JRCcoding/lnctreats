import { loadStripe } from '@stripe/stripe-js'

let stripePromise
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(
      'pk_test_51NPYyPFma9SnWGyugzjqCdwAdbT778AQaWMm7n8e8be0dcgurGaNQ9oayKWdd5VtC5vbVLrJDnWQBAVUaveCLupE00djr6vP5S'
    )
  }
  return stripePromise
}

export default getStripe
