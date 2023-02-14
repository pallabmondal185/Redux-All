
const initialstate = {
    result: ''
}

export const MyAdditionReducer = (state = initialstate, action) => {
    switch (action.type) {
        case 'ADDITION':
            return { ...state, result: action.payload1 + action.payload2 }

        default: return state
    }
}