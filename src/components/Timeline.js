import React, { useState } from 'react'
import { useEffect } from 'react'
import '../css/timeline.css'
function Timeline() {
  const [timelines, setTimelines] = useState([])

  useEffect(() => {
    fetch('/api/timeline/get_events', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setTimelines(data.message)
        slideIn();
      })
      
      const slideIn = ()=>{
        const sliders = document.querySelectorAll(".container");
        const options = {
          threshold:0.4,
          rootMargin:"0px 0px -100px 0px"

        }
        const sliderObserver = new IntersectionObserver((entries,sliderObserver)=>{
          entries.forEach(entry => {
            console.log("entered")
            if(!entry.isIntersecting){
              // entry.target.classList.remove("appear")
              return;
            }
            else{
              entry.target.classList.add("appear");
              sliderObserver.unobserve(entry.target);

            }
          })
          ;
        },options)

        sliders.forEach((slider)=>{
          sliderObserver.observe(slider);
        })


      }
      
    }, [])

  return (
    <div>
      <div class="timeline">
        {timelines
          ? timelines.map((timeline, index) => {
              if (index % 2 == 0)
                return (
                  <div className="container left">
                    <div className="content">
                      <h2>{timeline.date}</h2>
                      <p> {timeline.content}</p>
                    </div>
                  </div>
                )
              else {
                return (
                  <div className="container right">
                    <div className="content">
                      <h2>{timeline.date}</h2>
                      <p> {timeline.content}</p>
                    </div>
                  </div>
                )
              }
            })
          : ''}

        {/* <div class="container left">
          <div class="content">
            <h2>2017</h2>
            <p>
              Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
              admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
              quis iuvaret expetendis his, te elit voluptua dignissim per, habeo
              iusto primis ea eam.
            </p>
          </div>
        </div>
        <div class="container right">
          <div class="content">
            <h2>2016</h2>
            <p>
              Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
              admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
              quis iuvaret expetendis his, te elit voluptua dignissim per, habeo
              iusto primis ea eam.
            </p>
          </div>
        </div>
        <div class="container left">
          <div class="content">
            <h2>2015</h2>
            <p>
              Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
              admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
              quis iuvaret expetendis his, te elit voluptua dignissim per, habeo
              iusto primis ea eam.
            </p>
          </div>
        </div>
        <div class="container right">
          <div class="content">
            <h2>2012</h2>
            <p>
              Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
              admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
              quis iuvaret expetendis his, te elit voluptua dignissim per, habeo
              iusto primis ea eam.
            </p>
          </div>
        </div>
        <div class="container left">
          <div class="content">
            <h2>2011</h2>
            <p>
              Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
              admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
              quis iuvaret expetendis his, te elit voluptua dignissim per, habeo
              iusto primis ea eam.
            </p>
          </div>
        </div>
        <div class="container right">
          <div class="content">
            <h2>2007</h2>
            <p>
              Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
              admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
              quis iuvaret expetendis his, te elit voluptua dignissim per, habeo
              iusto primis ea eam.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Timeline
