import React, { useState, useEffect } from 'react'
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('')
  const [isError, setError] = useState(false)
  const firstValue = text || 'hello world'
  const secondValue = text && 'hello world'

  const toogleError = () => {
    setError(!isError)
  }

  return (
    <>
      <h1> {text || 'null'} </h1>
      <h1> {text && 'lagi'} </h1>
      <hr />
      <button className='btn' onClick={toogleError}>
        Toogle error
      </button>
      {isError && <h1> Error short circuit...</h1>}
      {isError ? <h1>Error ternary</h1> : <h1>Ternary sukses</h1>}
    </>
  )
}

export default ShortCircuit
