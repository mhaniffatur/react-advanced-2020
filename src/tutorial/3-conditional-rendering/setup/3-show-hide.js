import React, { useState, useEffect } from 'react'

const ShowHide = () => {
  const [show, setShow] = useState(false)

  const showHandler = () => {
    setShow(!show)
  }

  return (
    <React.Fragment>
      <h2>show/hide</h2>
      <hr />
      <br />
      <br />
      <button className='btn' onClick={showHandler}>
        show / hide
      </button>
      {show && <Item />}
    </React.Fragment>
  )
}

const Item = () => {
  const [size, setSize] = useState(window.innerWidth)

  const checkSize = () => {
    setSize(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', checkSize)
    return () => {
      window.removeEventListener('resize', checkSize)
    }
  }, [])

  return (
    <div style={{ marginTop: '2rem' }}>
      <h1>Window</h1>
      <h2>size: {size} </h2>
    </div>
  )
}

export default ShowHide
