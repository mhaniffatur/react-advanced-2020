import React, { useState, useEffect } from 'react'
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0)

  useEffect(() => {
    console.log('call use effect')
    document.title = `New Message(${value})`
  }, [value])

  useEffect(() => {
    console.log('hello')
  }, [])

  return (
    <React.Fragment>
      <h2>useEffect Basics</h2>
      <hr />
      <section style={{ style: '4rem 0', marginTop: '25px' }}>
        <h2>New Message : {value} </h2>
        <button
          className='btn'
          onClick={() => {
            setValue(value + 1)
          }}
        >
          Change Name
        </button>
      </section>
    </React.Fragment>
  )
}

export default UseEffectBasics
