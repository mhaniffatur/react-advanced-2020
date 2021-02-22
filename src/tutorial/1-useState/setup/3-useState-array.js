import React from 'react'
import { data } from '../../../data'

const UseStateArray = () => {
  const [apples, setApple] = React.useState(data)

  const clearAllItem = () => {
    setApple([])
  }

  const clearSpecificItem = (id) => {
    let newApple = apples.filter((apple) => apple.id !== id)
    setApple(newApple)

    console.log(newApple)
  }

  return (
    <React.Fragment>
      {apples.map((apple) => {
        const { id, name } = apple

        return (
          <div key={id} className='item'>
            <h4> {name} </h4>
            <button
              onClick={() => {
                clearSpecificItem(id)
              }}
            >
              {' '}
              Remove{' '}
            </button>
          </div>
        )
      })}

      <button className='btn' onClick={clearAllItem}>
        clear list
      </button>
    </React.Fragment>
  )
}

export default UseStateArray
