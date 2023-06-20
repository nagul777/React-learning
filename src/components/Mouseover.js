import React, { useState } from 'react'
import Hover from './Hover'
import HoverBox from './HoverBox'


function Mouseover() {

    const [hover, setHover] = useState(false);

function handleMouseStatus(x){
   setHover(x)
}

  return (
    <div className='mouse-interaction'>
      <Hover value={hover}/>
      <HoverBox mouseStatus={handleMouseStatus}/>
    </div>
  )
}

export default Mouseover
