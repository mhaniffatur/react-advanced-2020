import React, { useState, useEffect } from 'react'

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth)

  const checkSize = () => {
    setSize(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', checkSize)
    return () => {
      console.log('cleanup')
      window.removeEventListener('resize', checkSize)
    }
  })

  console.log(size)
  return (
    <React.Fragment>
      <h2>useEffect cleanup</h2>
      <hr /> <br /> <br />
      <h1>Size</h1>
      <h2>{size} Px</h2>
    </React.Fragment>
  )
}

export default UseEffectCleanup
