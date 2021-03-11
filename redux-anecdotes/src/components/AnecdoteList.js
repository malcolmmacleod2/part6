import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { voteForAnecdote } from '../reducers/anecdoteReducer'
import { createNotification, removeNotification } from '../reducers/notificationReducer'

const Anecdotes = () => {
  const dispatch = useDispatch()

  const anecdotes = useSelector(state => state.anecdotes.sort((a, b) => b.votes - a.votes))

  const vote = (id) => {
    dispatch(voteForAnecdote(id))

    const anecdote = anecdotes.find(a => a.id === id)
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
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Anecdotes
