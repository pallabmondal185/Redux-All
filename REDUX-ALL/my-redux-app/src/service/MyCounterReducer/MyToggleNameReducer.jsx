const initialstate = { name: 'Pallab' };

export const MyToggleNameReducer = (state = initialstate, action) => {
    switch (action.type) {
        case 'TOGGLENAME':
            if (state.name === 'Pallab')
                return { ...state, name: 'Mondal' }
            else if (state.name === 'Mondal') {
                return { ...state, name: 'Pallab' }
            }

        default: return state;
    }
}