const count = (state = 0, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return (state = 0);
    default:
      return state;
  }
};
export default count;
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
