const initialState = {
    user: {
        name:"counter",
        counter:0,
    }}
  
  const user = (state = initialState, { type, payload }) => {
    switch (type) {
      case "INCREMENT_COUNTER":
        return {
            user: {
                name: state.user.name,
                counter: state.user.counter+1,
            }
        }
        case "DECREMENT_COUNTER":
          return {
              user: {
                  name: state.user.name,
                  counter: state.user.counter-1,
              }
          }
      default:
        return state;
    }
  };
  
  export const updatCounter = (name) => {
    return {
      type: "INCREMENT_COUNTER",
      
    };
  };

  export const updatCounterdec = (name) => {
    return {
      type: "DECREMENT_COUNTER",
      
    };
  };
  
  export default user;
  
