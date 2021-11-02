const initialState = {
    count: 0,
  };
  
  const FunCounter = (state = initialState, { type,payload}) => {
    switch (type) {
      case "ADD_ONE":
        return {
          count: state.count+1,
        };
      case "MINUS_ONE":
        return {
          count: state.count-1,
        };
      case "CLEAR":
        return {
            count: 0,
        }

        case "MULTIPLYNUM":
          return{
            count:state.count*payload
          }
  
      default:
        return state;
    }
  };
  
  export default FunCounter;

  export const addOne = () => {
    return {
      type: "ADD_ONE",
    };
  };
  
  export const minusOne = () => {
    return {
      type: "MINUS_ONE",
      
    };
  };
  
  export const clearCounter = () => {
    return {
      type: "CLEAR",
    };
    
  };

  export const multiplyByNum = (num) => {
    return {
      type: "MULTIPLYNUM",
      payload: num
    };
    
  };