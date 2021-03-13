import anecdoteService from '../services/anecdotes'

export const voteForAnecdote = (id) => {
  return {
      type: 'VOTE',
      data: id
    }
  }

export const createAnecdote = (data) => {
  return {
      type: 'CREATE',
      data
    }
  }

export const initializeAnecdotes = () => {
    
    return async dispatch => {
        const data = await anecdoteService.getAll()
        console.log(data)
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
      const id = action.data
      const anocdoteToVote = state.find(n => n.id === id)

      const incrementedVote = { 
        ...anocdoteToVote, 
        votes: anocdoteToVote.votes + 1 
      }
      
      state = state.map(anecdote =>
        anecdote.id !== id ? anecdote : incrementedVote 
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