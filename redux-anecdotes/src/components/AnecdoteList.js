import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { voteForAnecdote } from '../reducers/anecdoteReducer'
import { createNotification, removeNotification } from '../reducers/notificationReducer'

const Anecdotes = () => {
  const dispatch = useDispatch()

  const anecdotes = useSelector(({filter, anecdotes}) => {
    if ( filter === '' ) {
      return anecdotes.sort((a, b) => b.votes - a.votes)
    }
    return anecdotes.filter(a => a.content.includes(filter)).sort((a, b) => b.votes - a.votes)
  })

  const vote = (anecdote) => {
    dispatch(voteForAnecdote(anecdote))
    dispatch(createNotification(`You voted for ${anecdote.content}`))
    setTimeout(() => dispatch(removeNotification()), 5000)

  }

  return(
    <div>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Anecdotes
