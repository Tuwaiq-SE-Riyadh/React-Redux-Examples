    const initialState = {
        number:0
    };
    
    const number = (state = initialState, { type, payload }) => {
        switch (type) {
        case "INCREMENT":
            return {
            number: state.number + 1,
            };
        case "DECREMENT":
            return {
            number: state.number -1,
            };
        case "RESET":
            return {
            number:0
            };
        case "INCREMENT_BY":
            return{
                number: payload
            }
        default:
            return state;
        }
    };
    
    export default number;



        export const plusOne = () => {
            return {
            type: "INCREMENT",
            };
        };

        export const minusOne = () => {
            return {
            type: "DECREMENT",
            };
        };

        export const reset = () => {
            return {
            type: "RESET",
            };
        };

        export const addEithNumber = (p)=>{
            return{
                type: "INCREMENT_BY",
                payload: p
            }
        }