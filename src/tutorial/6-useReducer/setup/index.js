import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// import { reducer } from '../final/reducer';

// reducer function
import { reducer } from './reducer';

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: 'hello world',
};

const Index = () => {
  // ANCHOR
  // ─── VARIABLE ───────────────────────────────────────────────────────────────────
  //

  const [name, setName] = useState('');
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newItem = { id: new Date().getTime().toString(), name };
      dispatch({
        type: 'ADD_ITEM',
        payload: newItem,
      });
    } else {
      dispatch({
        type: 'NO_VALUE',
      });
    }
  };

  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  };

  // ANCHOR
  // ─── RETURN RENDER ──────────────────────────────────────────────────────────────
  //

  return (
    <React.Fragment>
      <h2>useReducer</h2>
      <hr />
      <br />
      <br />
      {state.isModalOpen && (
        <Modal closeModal={closeModal} modalContent={state.modalContent} />
      )}
      <form action='' onSubmit={handleSubmit} className='form'>
        <div>
          <input
            type='text'
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <button type='submit'>add</button>
      </form>
      {state.people.map((person) => {
        return (
          <div key={person.id} className='item'>
            <h4>{person.name}</h4>
            <button
              onClick={() => {
                dispatch({
                  type: 'REMOVE_ITEM',
                  payload: person.id,
                });
              }}
            >
              Remove
            </button>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default Index;
