import React, { useEffect, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import './carousel.scss'

function Carousel({ children }) {
  const [currentGroup, setCurrentGroup] = useState()
  const [currentIndexes, setCurrentIndexes] = useState([0, 1, 2])

  useEffect(() => {
    setCurrentGroup([
      children[currentIndexes[0]],
      children[currentIndexes[1]],
      children[currentIndexes[2]],
    ])
  }, [currentIndexes])

  // Нажатие влево
  const handleLeft = () => {
    let allItemsCont = document.querySelector('.all-items-cont')
    allItemsCont.classList.add('move-left')
    setTimeout(() => {
      let newIndexLeft = currentIndexes[0] - 1
      if (newIndexLeft < 0) newIndexLeft = children.length - 1

      let newIndexMiddle = currentIndexes[1] - 1
      if (newIndexMiddle < 0) newIndexMiddle = children.length - 1

      let newIndexRight = currentIndexes[2] - 1
      if (newIndexRight < 0) newIndexRight = children.length - 1

      setCurrentIndexes([newIndexLeft, newIndexMiddle, newIndexRight])

      allItemsCont.classList.remove('move-left')
    }, 800)
  }

  // Нажатие вправо
  const handleRight = () => {
    let allItemsCont = document.querySelector('.all-items-cont')
    allItemsCont.classList.add('move-right')
    setTimeout(() => {
      let newIndexLeft = currentIndexes[0] + 1
      if (newIndexLeft > children.length - 1) newIndexLeft = 0

      let newIndexMiddle = currentIndexes[1] + 1
      if (newIndexMiddle > children.length - 1) newIndexMiddle = 0

      let newIndexRight = currentIndexes[2] + 1
      if (newIndexRight > children.length - 1) newIndexRight = 0

      setCurrentIndexes([newIndexLeft, newIndexMiddle, newIndexRight])

      allItemsCont.classList.remove('move-right')
    }, 800)
  }

  console.log(children)

  return (
    <div className="main-cont">
      <div className="carousel">
        {/* Стрелка влево */}
        <div className="arrow-cont arrow-cont-left">
          <FaChevronLeft className="arrow" onClick={handleLeft} />
        </div>

        {/* Все слайды */}
        <div className="window">
          <div
            className="all-items-cont"
            // style={{
            //   transform: `translateX(${offset * 100}%)`,
            // }}
          >
            {currentGroup}
          </div>
        </div>

        {/* Стрелка вправо */}
        <div className="arrow-cont arrow-cont-right">
          <FaChevronRight className="arrow" onClick={handleRight} />
        </div>
      </div>

      {/* Указатели слайда */}
      {/* <div className="circles-cont">
        {currentIndexes[1] + 1} / {children.length}
      </div> */}
    </div>
  )
}

export default Carousel
