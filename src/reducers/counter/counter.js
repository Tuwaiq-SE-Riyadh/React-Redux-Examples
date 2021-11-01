const initialState = {
    counter: {}
}

const counter =(state = initialState, {type,payload}) =>{

    switch(type){
        case "INCREMENT":
        return {
            counter:payload,
        };
        case "DECREMENT":
        return {
            counter:payload,
        };
        default:
            return state;
    }

}
export default counter;

export const increment=(counter) => {
    return{
        type: "INCREMENT",
        payload: counter
    }
}
export const decrement=(counter) => {
    return{
        type: "DECREMENT",
        payload: counter
    }
}