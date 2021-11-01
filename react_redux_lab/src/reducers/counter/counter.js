const initialState = {
    counter: {counter:0},
  };
  
  const counter = (state = initialState, { type, payload }) => {
    switch (type) {
      case "INCREMENT":
        return {
            counter: payload,
        };
      case "RESET":
        return {
          counter: {},
        };
      case "DECREMENT":
        return {
            counter: payload,
        }
  
      default:
        return state;
    }
  };
  
  export default counter;
  
  export const increment = (counter) => {
    return {
      type: "INCREMENT",
      payload: counter,
    };
  };
  
  export const reset = () => {
    return {
      type: "RESET",
    };
  };
  
  export const decrement = (counter) => {
    return {
      type: "DECREMENT",
      payload: counter,
    };
  };
  