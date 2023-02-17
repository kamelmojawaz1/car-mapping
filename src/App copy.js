import React, { useState } from 'react'

import Toast from 'react-bootstrap/Toast'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

import './App.css'

const Apps = () => {
  const handleClicked = () => {
    alert('clicked')
  }

  return (
    <div id="container">
      <map name="sedanFrontMap">
        <area
          shape="rec"
          coords="266,340,650,377"
          onClick={() => handleClicked()}
        />
      </map>
      <svg
        id="upper-grill-svg"
        width="903.0000000000001"
        height="690"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <title>Layer 1</title>
          <path
            id="upper-grill-shape"
            d="m259.5,338l389,0l0,47l-389,0l0,-47z"
          />
        </g>
      </svg>
      <img id="sedan-front-image" src="../sedan1.jpg" useMap="#sedanFrontMap" />
    </div>
  )
}

export default Apps
