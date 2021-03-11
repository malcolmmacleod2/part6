const initialState = ''

export const setFilter = (text) => {
  return {
      type: 'SET_FILTER',
      data: text
    }
  }

const filterReducer = (state = initialState, action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch(action.type) {
    case 'SET_FILTER':
        state = action.data
        return state
    default:
      return state
  }
}

export default filterReducer