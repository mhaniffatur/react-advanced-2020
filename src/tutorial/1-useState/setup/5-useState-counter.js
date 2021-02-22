import React, { useState } from 'react'

const UseStateCounter = () => {
  const [value, setValue] = useState(0)

  const increaseCounter = () => {
    setValue(value + 1)
  }

  const decreaseCounter = () => {
    setValue(value - 1)
  }

  const resetCounter = () => {
    setValue(0)
  }

  const increaselater = () => {
    setTimeout(() => {
      setValue((prevState) => {
        // console.log(prevState)
        return prevState + 1
      })
    }, 2000)
  }

  return (
    <React.Fragment>
      <h2>useState counter example</h2>
      <hr />
      <section style={{ style: '4rem 0', marginTop: '25px' }}>
        <h2>Regular Counter</h2>
        <h1>{value}</h1>
        <button className='btn' onClick={decreaseCounter}>
          Decrease
        </button>
        <button className='btn' onClick={resetCounter}>
          reset
        </button>
        <button className='btn' onClick={increaseCounter}>
          increase
        </button>
      </section>
      <section style={{ style: '4rem 0', marginTop: '25px' }}>
        <h2>More complex counter</h2>
        <h1>{value}</h1>
        <button className='btn' onClick={increaselater}>
          Increase later
        </button>
      </section>
    </React.Fragment>
  )
}

export default UseStateCounter
