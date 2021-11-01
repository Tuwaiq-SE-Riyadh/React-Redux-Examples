const initialState = {
    counter: {con:0},
  };
  const count = (state = initialState, { type, payload }) => {
    switch (type) {
      case "INCREMENT":
        return {
          counter:{
            con: payload
          } 
        };
      case "DECREMENT":
        return {
          counter:{
            con: payload
          } 
        };
      case "RESET":
        return {
          counter: {
            con:0
          }
        }
  
      default:
        return state;
    }
  };
  
  export default count;

  export const increment = (con) => {
    return {
      type: "INCREMENT",
      payload: con,
    };
  };
  
  export const decrement = (con) => {
    return {
      type: "DECREMENT",
      payload: con,
    };
  };
  
  export const reset = () => {
    return {
      type: "RESET",
    };
  };