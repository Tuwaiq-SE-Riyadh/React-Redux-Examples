const initialState = {
    counter: 0
  };

  const counter=(state = initialState, {type, payload}) =>{
     switch(type){
        case "INC":
            return{
                counter:state.counter+1

            }
            case "RESET":
             return {
                counter:0
            };
            case "DEC":
                return{
            counter:state.counter-1
    
                }
                default: 
                return state;
     }

      

  }

  export default counter;

export const inc = () => {
  return {
    type: "INC",
  };
};

export const res = () => {
  return {
    type: "RESET",
  };
};

export const dec = () => {
  return {
    type:"DEC" ,
    
  };
};