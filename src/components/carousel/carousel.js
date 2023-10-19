import React, { useState, useRef, useEffect } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import './carousel.scss'

function Carousel({ children }) {
  const [currentChildren, setChildren] = useState(children)
  const [offset, setOffset] = useState(0)
  const allItemsCont = useRef()
  const [sliderLength, setSliderLength] = useState(children.length)

  useEffect(() => {
    const offsetMax = sliderLength

    allItemsCont.current.style.transition = 'translate'
    allItemsCont.current.style.transitionProperty = 'transform'
    allItemsCont.current.style.transitionDuration = '800ms'

    // Если индекс меньше длины массива
    if (offset < offsetMax) {
      // Если индекс положительный
      if (offset > 0) {
        // тогда просто сдивагем вправо или влево
        allItemsCont.current.style.transform = `translateX(${-offset * 100}%)`
      }
      // Если индекс отрицательный
      else {
        // если индекс = -1
        if (offset === -1) {
          allItemsCont.current.style.transition = 'none'
          allItemsCont.current.style.transitionProperty = 'none'
          allItemsCont.current.style.transitionDuration = '0ms'

          setChildren((child) => [...child, children])

          allItemsCont.current.style.transform = `translateX(${
            -(sliderLength + 1) * 100
          }%)`

          allItemsCont.current.style.transform = `translateX(${
            -(-1 + (sliderLength + 1)) * 100
          }%)`

          setOffset((current) => {
            return current + (children.length + 1)
          })
        } else
          allItemsCont.current.style.transform = `translateX(${-offset * 100}%)`
      }
    } else {
      setChildren((child) => [...child, children])
      allItemsCont.current.style.transform = `translateX(${-offset * 100}%)`
    }
  }, [offset])

  // Нажатие вправо
  const handleRight = () => {
    setOffset((offset) => {
      return offset + 1
    })
  }

  // Нажатие влево
  const handleLeft = () => {
    setOffset((offset) => {
      return offset - 1
    })
  }

  return (
    <div className="main-cont">
      <div className="carousel">
        {/* Стрелка влево */}
        <div className="arrow-cont arrow-cont-left">
          <FaChevronLeft className="arrow" onClick={handleLeft} />
        </div>

        {/* Все слайды */}
        <div className="window">
          <div ref={allItemsCont} className="all-items-cont">
            {currentChildren}
          </div>
        </div>

        {/* Стрелка вправо */}
        <div className="arrow-cont arrow-cont-right">
          <FaChevronRight className="arrow" onClick={handleRight} />
        </div>
      </div>
    </div>
  )
}

export default Carousel
