const initialState = {
    counter: {},
  };
  
const Counter = (state = initialState, {type, payload})=> {
    switch (type) {
        case "INCREMENT":
            return{
                counter: payload,
            };
        case "DECREMENT":
            return{
                counter: payload,
            };
        case "RESET":
            return{
                counter: {},
            };
        default:
            return state;
    }
}

export default Counter;


export const incr = (counter) => {
    return {
      type: "INCREMENT",
      payload: counter,
    };
  };
  
  export const decr = (counter) => {
    return {
      type: "DECREMENT",
      payload: counter,
    };
  };
  
  export const reset = () => {
    return {
      type: "RESET",
    };
  };