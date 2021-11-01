const initialState = {
  counter: 0
};

const counter = (state = initialState, { type, payload }) => {
  switch (type) {
    case "INCREMENT":
      return {
        counter: state.counter + 1,
      };
    case "RESET":
      return {
        counter: 0,
      };
    case "DECREMENT":
      return {
        counter: state.counter - 1
      }
      // case "DECREMENTBy":
      //   return {
      //     counter: (state.counter + payload)
      //   }

    default:
      return state;
  }
};

export default counter;

export const incrementCounter = () => {
  return {
    type: "INCREMENT",
  };
};

export const resetCounter = () => {
  return {
    type: "RESET",
  };
};
// export const deacrementCounterBy = ({myValue}) => {
//   return {
//     type: "DECREMENTBy",
//     payload: {myValue}
//   };
// };

export const decrementCounter = () => {
  return {
    type: "DECREMENT",
  };
  
};
