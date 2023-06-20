import React from 'react'

function Hover({value}) {
  return (
    <div>
      <div className='hover'>The Mouse Hover Position {value ? 'mouse in box' : 'mouse in out of box' }</div>
    </div>
  )
}

export default Hover
