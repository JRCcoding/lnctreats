import { CART_CLEAR_ITEMS } from '../Constants/cartConstants'
import {
  REQUEST_CREATE_FAIL,
  REQUEST_CREATE_REQUEST,
  REQUEST_CREATE_SUCCESS,
  REQUEST_DELETE_FAIL,
  REQUEST_DELETE_REQUEST,
  REQUEST_DELETE_SUCCESS,
  REQUEST_LIST_FAIL,
  REQUEST_LIST_REQUEST,
  REQUEST_LIST_SUCCESS,
  REQUEST_SAVE_INFO,
} from '../Constants/requestConstants'
import axios from 'axios'
import { logout } from './userActions'

export const addRequestInfo = (data) => async (dispatch) => {
  localStorage.removeItem('requestInfo')
  dispatch({
    type: REQUEST_SAVE_INFO,
    payload: data,
  })

  localStorage.setItem('requestInfo', JSON.stringify(data))
}

export const createRequest = (request) => async (dispatch, getState) => {
  await axios.post(`/api/requests`, request)
  dispatch({
    type: REQUEST_CREATE_REQUEST,
    payload: request,
  })
}

export const listRequests = () => async (dispatch, getState) => {
  // dispatch({
  //   type: REQUEST_LIST_REQUEST,
  // })

  // const {
  //   userLogin: { userInfo },
  // } = getState()

  // const config = {
  //   headers: {
  //     Authorization: `Bearer ${userInfo.token}`,
  //   },
  // }

  const { data } = await axios.get(`/api/requests`)

  dispatch({
    type: REQUEST_LIST_SUCCESS,
    payload: data,
  })
}

export const deleteRequest = (order) => async (dispatch, getState) => {
  try {
    dispatch({
      type: REQUEST_DELETE_REQUEST,
    })
    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }
    const { data } = await axios.delete(
      `/api/orders/${order._id}/delete`,
      config
    )
    dispatch({
      type: REQUEST_DELETE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: REQUEST_DELETE_FAIL,
      payload: message,
    })
  }
}
