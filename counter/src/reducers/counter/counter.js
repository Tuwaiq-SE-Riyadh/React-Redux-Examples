const initialState = {
    counter: {},
  };
  
  const counter = (state = initialState, { type, payload }) => {
    switch (type) {
      case "ADD_Counter":
        return {
          counter: payload,
        };
       
      case "CLEAR_Counter":
        return {
            counter: {},
        };
      case "DEC_Counter":
        return {
            counter:  payload,
          };
    
      default:
        return state;
    }
  };
  
  export default counter;
  
  export const addCounter = (counter) => {
    return {
      type: "ADD_Counter",
      payload: counter,
    };
  };
  
  export const clearCounter = () => {
    return {
      type: "CLEAR_Counter",
    };
  };
  
  export const decCounter = (counter) => {
    return {
      type: "DEC_Counter",
      payload: counter,
    };
  };
  