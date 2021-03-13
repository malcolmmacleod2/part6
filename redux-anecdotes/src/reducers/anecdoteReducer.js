const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

export const voteForAnecdote = (id) => {
  return {
      type: 'VOTE',
      data: id
    }
  }

export const createAnecdote = (anecdote) => {
  return {
      type: 'CREATE',
      data: anecdote
    }
  }

export const initializeAnecdotes = (anecdotes) => {
  return {
    type: 'INIT',
    data: anecdotes,
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
      const anecdote = asObject(action.data)
      state = state.concat(anecdote)
      return state

    case 'INIT':
      return action.data

    default:
      return state
  }
}

export default anecdoteReducer