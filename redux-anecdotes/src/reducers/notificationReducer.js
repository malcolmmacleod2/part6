const initialState = 'hello'

export const notify = (message) => {
  return {
      type: 'NOTIFY',
      data: message
    }
  }

const notificationReducer = (state = initialState, action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch(action.type) {
    case 'NOTIFY':
        state = action.data
        return state
    default:
      return state
  }
}

export default notificationReducer