import { CAKE_SAVE_INFO } from '../Constants/cakeConstants'

export const addCakeInfo = (data) => async (dispatch) => {
  dispatch({
    type: CAKE_SAVE_INFO,
    payload: data,
  })

  localStorage.setItem('cakeInfo', JSON.stringify(data))
}
