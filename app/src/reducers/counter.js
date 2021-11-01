const initialState = {
    counter: {},
  };
  
  const counter = (state = initialState, { type, payload }) => {
  
    switch (type) {
      case "ADD_USER":
        return {
          counter: payload,
        };
      case "CLEAR_USER":
        return {
          counter: {},
        };
      case "UPDATE_USER_NAME":
        return {
          counter: {
              number: state.counter.number,
                name: payload
            }
        }
  
      default:
        return state;
    }
  };
  
  export default counter;
  
  export const addNumber = (counter) => {
    return {
      type: "ADD_USER",
      payload: counter,
    };
  };
  
  export const clearNumber = () => {
    return {
      type: "CLEAR_USER",
    };
  };
  
  export const updateNumber = (counter) => {
    return {
      type: "UPDATE_USER_NAME",
      payload: counter,
    };
  };
  