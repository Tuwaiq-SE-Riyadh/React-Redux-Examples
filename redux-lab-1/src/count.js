const initialState = {
    count: 0,
  };

  const count = (state = initialState, { type, payload }) => {
    switch (type) {
      case "INCREMENT":
        return {count: state.count+1}

      case "DECREMENT":
        return {count: state.count-1}

      case "RESET":
        return {count: state.count=0}
  
      default:
        return state;
    }
  };

  export default count;

  // actions //

export const increment = (count) => {
  return {
    type: "INCREMENT",
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

export const reset = () => {
  return {    
    type: "RESET",
  };
};