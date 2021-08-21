const initialState = 'hello'
let timeoutId = null

export const removeNotification = () => {
  return {
    type: 'REMOVE',
  }
}

export const createNotification = (message, seconds) => {
  return (dispatch) => {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }

    dispatch({
      type: 'NOTIFY',
      data: message,
    })
    setTimeout(() => {
      timeoutId = setTimeout(
        () => dispatch(removeNotification()),
        seconds * 1000
      )
    })
  }
}

const notificationReducer = (state = initialState, action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch (action.type) {
    case 'NOTIFY':
      state = action.data
      return state
    case 'REMOVE':
      state = null
      return state
    default:
      return state
  }
}

export default notificationReducer
