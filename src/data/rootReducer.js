import { combineReducers } from 'redux';
import delivery from './delivery/reducers';

const createRootReducer = () => combineReducers({
    delivery,
});

export {
    createRootReducer
}
