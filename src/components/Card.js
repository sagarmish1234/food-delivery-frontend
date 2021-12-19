import React from 'react'
import '../css/card.css'

function Card(props) {
  return (
    <div className="card">
      <img
        src={'https://source.unsplash.com/random/?people'}
        alt=""
        className="card-image"
      />
      {/* {props.content} */}
      <p className="card-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab pariatur ut
        officiis maxime quis quaerat asperiores voluptatibus porro quos beatae
        
      <div className="card-author">{props.author}</div>
      </p>
    </div>
  )
}

export default Card
