import React, { useState, useEffect } from 'react'
const url = 'https://api.github.com/users/QuincyLarson'

const MultipleReturns = () => {
  const [isLoading, setLoading] = useState(false)
  const [isError, setError] = useState(false)
  const [user, setUser] = useState('default user')

  useEffect(() => {
    setLoading(true)
    fetch(url)
      .then((resp) => {
        if (resp.status >= 200 && resp.status <= 299) {
          return resp.json()
        } else {
          setLoading(false)
          setError(true)
        }
      })
      .then((user) => {
        setUser(user.login)
        setLoading(false)
      })
      .catch((err) => console.log(err))
  }, [])

  const loadingHandler = () => {
    if (isLoading) {
      return (
        <div>
          <h2>Loading...</h2>
        </div>
      )
    }
    if (isError) {
      return (
        <div>
          <h2>Error...</h2>
        </div>
      )
    } else {
      return (
        <div>
          <h2>{user}</h2>
        </div>
      )
    }
  }

  return (
    <React.Fragment>
      <h2>multiple returns</h2>;
      <hr />
      <br />
      <br />
      {loadingHandler()}
    </React.Fragment>
  )
}

export default MultipleReturns
