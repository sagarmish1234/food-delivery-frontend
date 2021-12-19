import React, { useEffect, useState } from 'react'
import '../css/carousel.css'
// import Image1 from '../images/carousel-image1.jpg'
import Image2 from '../images/carousel-image2.jpg'
import Image3 from '../images/carousel-image3.jpg'
import apiUrl from "../apiUrl"


function Carousel() {
  const [carouselImages, setCarouselImages] = useState([])
  var [dataFound, setDataFound] = useState([])
  useEffect(async () => {
    fetch(apiUrl+'/api/carousel/get_carousel', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        console.log(response)
        return response.json()
      })
      .then((data) => {
        setDataFound(data.message)

        doSomething()
        // console.log(carousel)
      })

    const doSomething = () => {
      if (dataFound) {
        console.log(dataFound)
        document.querySelectorAll('.carousel').forEach((carousel) => {
          const items = carousel.querySelectorAll('.carousel__item')
          const buttonsHtml = Array.from(items, () => {
            return `<span class="carousel__button"></span>`
          })
          carousel.insertAdjacentHTML(
            'beforeend',
            `
                <div class="carousel__nav">
              ${buttonsHtml.join('')}
              </div>
              `,
          )

          const buttons = carousel.querySelectorAll('.carousel__button')

          var index = 0
          buttons.forEach((button, i) => {
            button.addEventListener('click', () => {
              // un-select all the items
              items.forEach((item) =>
                item.classList.remove('carousel__item--selected'),
              )
              buttons.forEach((button) =>
                button.classList.remove('carousel__button--selected'),
              )

              items[i].classList.add('carousel__item--selected')
              button.classList.add('carousel__button--selected')
              index = i
            })
          })
          console.log(items)
          // Select the first item on page load
          items[0].classList.add('carousel__item--selected')
          buttons[0].classList.add('carousel__button--selected')
          setInterval(() => {
            items.forEach((item) =>
              item.classList.remove('carousel__item--selected'),
            )
            buttons.forEach((button) =>
              button.classList.remove('carousel__button--selected'),
            )

            items[index].classList.add('carousel__item--selected')
            buttons[index].classList.add('carousel__button--selected')
            index = (index + 1) % buttons.length
          }, 4000)
        })
      }
    }

    // return ()=>{
    //     setCarousel([...carousel]);
    // }
  }, [])

  return (
    <>
      <div class="carousel" id="carousel">
        {dataFound.map((image, index) => {
          return (
            <div class="carousel__item">
              <img class="carousel-image" src={image.location} alt="image" />
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Carousel
