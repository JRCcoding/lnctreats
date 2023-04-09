import { CART_CLEAR_ITEMS } from '../Constants/cartConstants'
import {
  REQUEST_CREATE_FAIL,
  REQUEST_CREATE_REQUEST,
  REQUEST_CREATE_SUCCESS,
  REQUEST_SAVE_INFO,
} from '../Constants/requestConstants'
import axios from 'axios'
import { logout } from './userActions'

export const addRequestInfo = (data) => async (dispatch) => {
  dispatch({
    type: REQUEST_SAVE_INFO,
    payload: data,
  })

  localStorage.setItem('requestInfo', JSON.stringify(data))
}

export const createRequest = (request) => async (dispatch, getState) => {
  // try {
  //   dispatch({
  //     type: REQUEST_CREATE_REQUEST,
  //   })

  const {
    userLogin: { userInfo },
  } = getState()

  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${userInfo.token}`,
    },
  }

  //   const { data } = await axios.post(`/api/orders`, request, config)

  //   dispatch({
  //     type: REQUEST_CREATE_SUCCESS,
  //     payload: data,
  //   })
  //   // dispatch({
  //   //   type: CART_CLEAR_ITEMS,
  //   //   payload: data,
  //   // })
  await axios.post(`/api/orders`, request, config)
  dispatch({
    type: REQUEST_CREATE_REQUEST,
    payload: localStorage.getItem('requestInfo'),
  })
  localStorage.removeItem('requestInfo')
  // } catch (error) {
  //   const message =
  //     error.response && error.response.data.message
  //       ? error.response.data.message
  //       : error.message
  //   if (message === 'Not authorized, token failed') {
  //     dispatch(logout())
  //   }
  //   dispatch({
  //     type: REQUEST_CREATE_FAIL,
  //     payload: message,
  //   })
  // }
}
