import React from 'react'
import pattern from './images/InTTO pattern.png'
const BgPattern = () => {
  return (
    <div className="z-0">
        <img src={pattern} className="relative flex inset-0 bg-center bg-cover" alt='background pattern'/>
    </div>
  )
}

export default BgPattern