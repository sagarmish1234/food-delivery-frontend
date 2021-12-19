import React from 'react'
import Card from './Card'
import '../css/card.css'
function Review() {
  const states = [
    { author: 'Sagar', content: 'I am sagar' },
    { author: 'Sagar', content: 'I am sagar' },
    { author: 'Sagar', content: 'I am sagar' },
    { author: 'Sagar', content: 'I am sagar' },
    { author: 'Sagar', content: 'I am sagar' },
    { author: 'Sagar', content: 'I am sagar' },
  ]

  return (
    <div className='card-background'>
      <div className="card-container">
        {states.map((state, index) => {
          return <Card author={state.author} content={state.content} />
        })}
      </div>
    </div>
  )
}

export default Review
