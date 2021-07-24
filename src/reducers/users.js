import { CREATE_USER, UPDATE_USER } from '../constants/actionTypes';

const initialState = {
    loading: false,
    hasErrors: false,
    authenticated: false,
    users: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CREATE_USER:
            return [ ... state, action.payload ];
        case UPDATE_USER:
            return state.users.data.map((user) => (user._id === action.payload._id ? action.payload : user))
        default:
            return state;
    }
}
