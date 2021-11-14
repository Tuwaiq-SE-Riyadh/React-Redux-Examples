const initialState = {
  counter: 0,
};

const counter = (state = initialState, { type }) => {
  switch (type) {
    case "increment":
      return {
        counter: state.counter+1,
      };
    case "decrement":
      return {
        counter: state.counter-1,
      };
    case "reset":
      return {
        counter: 0,
              
          
      }

    default:
      return state;
  }
};

export default counter;

export const increment = () => {
  return {
    type: "increment",
    
  };
};

export const decrement = () => {
  return {
    type: "decrement",
   
  };
};


export const reset = () => {
  return {
    type: "reset",
    
  };
};

// export const addUser = (user) => {
//   return {
//     type: "ADD_USER",
//     payload: user,
//   };
// };

// export const clearUser = () => {
//   return {
//     type: "CLEAR_USER",
//   };
// };

// export const updateUserName = (name) => {
//   return {
//     type: "UPDATE_USER_NAME",
//     payload: name,
//   };
// };
