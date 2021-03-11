const initialState = 'hello'

export const createNotification = (message) => {
  return {
      type: 'NOTIFY',
      data: message
    }
  }

export const removeNotification = (message) => {
  return {
      type: 'REMOVE'
    }
  }



const notificationReducer = (state = initialState, action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch(action.type) {
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