import React from 'react'

function FeatureBox  (props) {
  return (
    <div className='s-b-text'>
        <h2>{props.title}</h2>
        <button>{props.price}</button>
        <p>{props.p}</p>
     
    </div>
  )
}

export default FeatureBox 