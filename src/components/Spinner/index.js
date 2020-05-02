import React from 'react'
import './style.css'

function Spinner({width, height}) {
  return <div className={`loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-${height} w-${width}`}></div>
}

export default Spinner
