import {
  REQUEST_ADD_ITEM,
  REQUEST_REMOVE_ITEM,
  REQUEST_SAVE_SHIPPING_ADDRESS,
  REQUEST_SAVE_PAYMENT_METHOD,
  REQUEST_CLEAR_ITEMS,
} from '../Constants/requestConstants'

export const requestReducer = (
  state = { requestItems: [], shippingAddress: {} },
  action
) => {
  switch (action.type) {
    case REQUEST_ADD_ITEM:
      const item = action.payload

      const existItem = state.requestItems.find(
        (x) => x.product === item.product
      )

      if (existItem) {
        return {
          ...state,
          requestItems: state.requestItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        }
      } else {
        return {
          ...state,
          requestItems: [...state.requestItems, item],
        }
      }
    // case REQUEST_REMOVE_ITEM:
    //   return {
    //     ...state,
    //     requestItems: state.requestItems.filter(
    //       (x) => x.product !== action.payload
    //     ),
    //   }
    // case REQUEST_SAVE_SHIPPING_ADDRESS:
    //   return {
    //     ...state,
    //     shippingAddress: action.payload,
    //   }
    // case REQUEST_SAVE_PAYMENT_METHOD:
    //   return {
    //     ...state,
    //     paymentMethod: action.payload,
    //   }
    // case REQUEST_CLEAR_ITEMS:
    //   return {
    //     ...state,
    //     requestItems: [],
    //   }
    default:
      return state
  }
}
