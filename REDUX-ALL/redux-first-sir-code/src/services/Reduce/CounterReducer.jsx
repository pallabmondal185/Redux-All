import { increment_value, decriment_value, upper_case,addition_number } from '../Types';

const initialState = {
    count: 0,
    upper: 'pallab',

    num1: 5,
    num2:2,
    result:''
}

export default function (state = initialState, action) {
    switch (action.type) {
        case increment_value:
            return {
                ...state,
                count: state.count + 1
            }

        case decriment_value:
            return {
                ...state,
                count: state.count - 1
            }

        case upper_case:
            if (state.upper === 'pallab') {
                return {
                    ...state,
                    upper: state.upper.toUpperCase()
                }
            }
            else if (state.upper === 'PALLAB') {
                return {
                    ...state,
                    upper: state.upper.toLowerCase()
                }
            }

        case addition_number:
                return {
                    ...state,
                    result:state.num1+state.num2
                }
        default:
            return state;
    }
}