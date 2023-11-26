import React, { useState, useRef, useEffect } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import './carousel.scss'
import './carousel_mobile.scss'

function Carousel({ children }) {
  const [currentChildren, setChildren] = useState(children)
  const [offset, setOffset] = useState(0)
  const allItemsCont = useRef()
  const [sliderLength, setSliderLength] = useState(children.length)

  let mouseOnDrag

  useEffect(() => {
    const offsetMax = sliderLength

    allItemsCont.current.style.transition = 'translate'
    allItemsCont.current.style.transitionProperty = 'transform'
    allItemsCont.current.style.transitionDuration = '800ms'

    // Установить текущий активный указатель слайда
    if (offset >= 0) {
      let currentIndex = offset % sliderLength
      setDotActive(`round${currentIndex}`)
    }

    // Если сдвиг меньше длиины массива слайдов
    if (offset < offsetMax) {
      if (offset > 0) {
        allItemsCont.current.style.transform = `translateX(${-offset * 100}%)`
      } else {
        if (offset === -1) {
          allItemsCont.current.style.transition = 'none'
          allItemsCont.current.style.transitionProperty = 'none'
          allItemsCont.current.style.transitionDuration = '0ms'

          setChildren((child) => [...child, children])

          allItemsCont.current.style.transform = `translateX(${
            -(-1 + (sliderLength + 1)) * 100
          }%)`

          setOffset((current) => {
            let newOffset = current + children.length

            return newOffset
          })
        } else
          allItemsCont.current.style.transform = `translateX(${-offset * 100}%)`
      }
    } else {
      // Если сдвиг больше длиины массива слайдов, необходимо увеличить массив слайдов
      setChildren((child) => [...child, children])
      allItemsCont.current.style.transform = `translateX(${-offset * 100}%)`
    }
  }, [offset])

  const handleClickRight = () => {
    setOffset((offset) => {
      return offset + 1
    })
  }

  const handleClickLeft = () => {
    setOffset((offset) => {
      return offset - 1
    })
  }

  function setDotActive(id) {
    let currentDot = document.querySelectorAll(`#${id}`)
    let prevDot = document.querySelectorAll('.round-active')

    prevDot?.forEach((item) => item.classList.remove('round-active'))
    currentDot.forEach((item) => item.classList.add('round-active'))
  }

  const dotClickHandler = (index) => {
    if (index != offset) {
      let currentIndex = offset % sliderLength
      let newOffset = offset - currentIndex + index
      setOffset(newOffset)
    }
  }

  const handleMouseDown = (event) => {
    let mouseX

    switch (event.type) {
      case 'mousedown':
        mouseX = event.clientX
        mouseOnDrag = mouseX
        break
      case 'touchstart':
        mouseX = event.touches[0].clientX
        mouseOnDrag = mouseX
        break
      default:
        return
    }
  }

  const handleMouseUp = (event) => {
    let mouseX

    switch (event.type) {
      case 'mouseup':
        mouseX = event.clientX
        break
      case 'touchend':
        mouseX = event.changedTouches[0].clientX
        break
      default:
        return
    }
    // const mouseX = event.clientX
    if (Math.abs(mouseX - mouseOnDrag) >= 10)
      mouseX > mouseOnDrag ? handleClickLeft() : handleClickRight()
  }

  return (
    <div className="main-cont">
      <div
        className="carousel"
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
        onMouseUp={handleMouseUp}
        onTouchEnd={handleMouseUp}
      >
        <div className="arrow-cont arrow-cont-left">
          <FaChevronLeft className="arrow" onClick={handleClickLeft} />
        </div>

        <div className="window">
          <div ref={allItemsCont} className="all-items-cont">
            {currentChildren}
          </div>
        </div>

        <div className="arrow-cont arrow-cont-right">
          <FaChevronRight className="arrow" onClick={handleClickRight} />
        </div>
      </div>

      <div className="dots-cont">
        <div className="dots">
          {[...Array(sliderLength)].map((_, index) => {
            return (
              <div className="dot-box">
                <div
                  key={`round${index}`}
                  className="round"
                  id={`round${index}`}
                  onClick={() => {
                    dotClickHandler(index)
                  }}
                ></div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Carousel
