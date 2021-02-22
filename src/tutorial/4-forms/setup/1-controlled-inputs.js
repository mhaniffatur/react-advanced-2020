import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [people, setPeople] = useState([]);

  const submitHandler = (err) => {
    err.preventDefault();

    if (firstName && email) {
      const newPerson = {
        id: new Date().getTime().toString(),
        firstName: firstName,
        email: email,
      };

      setPeople((people) => {
        return [...people, newPerson];
      });

      setFirstName('');
      setEmail('');

      console.log(newPerson);
    } else {
      console.log('empty value');
    }
  };

  const changeNameHandler = (event) => {
    setFirstName(event.target.value);
  };

  const changeEmailHandler = (event) => {
    setEmail(event.target.value);
  };

  return (
    <React.Fragment>
      <h1>controlled inputs</h1>
      <hr />
      <br />
      <br />
      <article>
        <form action='' className='form' onSubmit={submitHandler}>
          <div className='form-control'>
            <label htmlFor='firstName'> Name : </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={firstName}
              onChange={(event) => {
                changeNameHandler(event);
              }}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'> Email : </label>
            <input
              type='text'
              id='email'
              name='email'
              value={email}
              onChange={(event) => {
                changeEmailHandler(event);
              }}
            />
          </div>
          <button type='submit'>add person</button>
        </form>
        {people.map((person) => {
          const { id, firstName, email } = person;
          return (
            <dir className='item' key={id}>
              <h4> {firstName} </h4>
              <p> {email} </p>
            </dir>
          );
        })}
      </article>
    </React.Fragment>
  );
};

export default ControlledInputs;
