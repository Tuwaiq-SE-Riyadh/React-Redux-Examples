const initialState = {
    count:0,
  };
  
  const count = (state = initialState, { type, payload }) => {
    switch (type) {
      case "INC":
        return {
          count: state.count + 1
        };
      case "DEC":
        return {
          count: state.count - 1

          
        };
      case "RESNT":
        return {
          count: 0
            
        }
  
      default:
        return state;
    }
  };
  
  export default count;
  
  export const inc = () => {
    return {
      type: "INC",
    };
  };
  
  export const dec = () => {
    return {
      type: "DEC",

    };
  };
  
  export const resnt = () => {
    return {
      type: "RESNT",
    };
  };
  