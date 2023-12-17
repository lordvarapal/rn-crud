import React, {createContext, useReducer} from 'react';
import users from '../data/Users';

const initialState = { users }
const UsersContext = createContext({});

export const UsersProvider = props => {
  
    function reducer(state,cation) {
        
        
    }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UsersContext.Provider
      value={{
        state: {
          users, dispatch
        },
      }}>
      {props.children}
    </UsersContext.Provider>
  );
};

export default UsersContext;
