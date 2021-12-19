import React from 'react'
import Carousel from './Carousel'
import Vission from './Vission'
import Timeline from './Timeline'
import Review from './Review'
export default function Home() {
  return (
    <div className="home-container" id="home-page" >
      <Carousel />
      <Vission />
      <Timeline/>
      <Review></Review>
    </div>
  )
}
