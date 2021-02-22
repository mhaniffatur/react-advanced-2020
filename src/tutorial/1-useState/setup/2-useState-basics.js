import React, { useState } from 'react'

const UseStateBasics = () => {
  const [banana, setBanana] = useState('Random Title')

  const handleClick = () => {
    if (banana === 'Random Title') {
      setBanana('Ganti Judul')
    } else {
      setBanana('Random Title')
    }
  }

  return (
    <React.Fragment>
      <h1>{banana}</h1>
      <button className='btn' onClick={handleClick}>
        {' '}
        Change Title{' '}
      </button>
    </React.Fragment>
  )
}

export default UseStateBasics
