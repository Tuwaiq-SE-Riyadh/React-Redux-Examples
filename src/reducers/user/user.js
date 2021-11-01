const initialState = {
  counter:0
};

const counter = (state = initialState, {type}) => {
  switch (type) {

    case "increment":
        return {
          counter: state.counter+1
        };
        case "decrement":
            return {
              counter: state.counter-1
            };
          case "reset":
              return {
                counter: 0,
              };

          

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
export const decrement= () => {
  return {
    type: "decrement",
   
  };
};
export const reset = () => {
  return {
    type: "reset",
  
  };
};




