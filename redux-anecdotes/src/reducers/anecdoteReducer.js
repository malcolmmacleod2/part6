import anecdoteService from '../services/anecdotes'

export const voteForAnecdote = (anecdote) => {
  return async dispatch => {

    const incrementedAnecdote = { 
        ...anecdote, 
        votes: anecdote.votes + 1 
    }

    const updated = await anecdoteService.update(incrementedAnecdote)

    dispatch({
        type: 'VOTE',
        data: updated
      })
  }
}

export const createAnecdote = (data) => {
  return async dispatch =>  {
      const newAnecdote = await anecdoteService.createNew(data)
      dispatch({
        type: 'CREATE',
        data: newAnecdote
      })
    }
  }

export const initializeAnecdotes = () => {
    
    return async dispatch => {
        const data = await anecdoteService.getAll()
        dispatch({
          type: 'CREATE',
          data
        })
    }

}

const anecdoteReducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch(action.type) {
    case 'VOTE':
      const updated = action.data
    
      state = state.map(anecdote =>
        anecdote.id !== updated.id ? anecdote : updated 
      )
      return state

    case 'CREATE':
      return state.concat(action.data)

    case 'INIT':
      return action.data

    default:
      return state
  }
}

export default anecdoteReducer