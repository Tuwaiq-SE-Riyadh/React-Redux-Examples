//create initial state 
const initialState = {
    count: 0
  };
  
//reducer
const count = (state = initialState, { type, payload }) => {
    switch (type) {
      case "Increment":
        return {
            count: payload,
        };
      case "decrement":
        return {
            count: payload,
        };  
      case "reset":
        return {
            count: 0
        };
      default:
        return state;
    }
  };
  
export default count;

export const Increment = (count) => {
    console.log("Inside increment"+count);
    return {
      type: "Increment",
      payload: count,
    };
  };
  
  
  export const decrement = (count) => {
    console.log("Inside deccrement"+count);
    return {
      type: "decrement",
      payload: count,
    };
  };
  

  export const reset = () => {
    return {
      type: "reset"
    };
  };