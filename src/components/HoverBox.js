import React from 'react'

function HoverBox({mouseStatus}) {

function handleMouseEnter(){
    mouseStatus(true)
}

function handleMouseLeave(){
    mouseStatus(false)
}
  return (
    <div>
      <div className="mouse-box" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>

      </div>
    </div>
  )
}

export default HoverBox
