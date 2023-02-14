import{createStore} from 'redux';
import rootReducer from './Reduce/Index';

const initialState={}

export const store= createStore(
    rootReducer,
    initialState
)

