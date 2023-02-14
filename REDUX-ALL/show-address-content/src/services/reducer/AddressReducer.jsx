import { DIST_NAME, PO_NAME, PS_NAME, VILL_NAME } from "../Types"


const initialState = {
    vill: 'Neogirat',
    po: 'Chaluary',
    ps: 'Falta',
    dist: 'South 24 Parganas'
}

const AddressReducer = (state = initialState, action) => {
    switch (action.type) {
        case VILL_NAME:
            return { ...state, vill: 'Kolkata' };

        case PO_NAME:
            return { ...state, po: 'Delhi' };

        case PS_NAME:
            return { ...state, ps: 'Chennai' }

        case DIST_NAME:
            return { ...state, dist: 'Sundarban' }

        default:
            return  state ;
    }
}

export default AddressReducer;