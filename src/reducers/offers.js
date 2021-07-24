import { FETCH_ALL_OFFERS, CREATE_OFFER, UPDATE_OFFER, DELETE_OFFER } from '../constants/actionTypes'

export default (offers = [], action) => {
    switch (action.type) {
        case FETCH_ALL_OFFERS:
            return action.payload;
        case CREATE_OFFER:
            return [ ... offers, action.payload ];
        case UPDATE_OFFER:
            return offers.map((offer) => (offer._id === action.payload._id ? action.payload : offer));
        case DELETE_OFFER:
            return offers.filter((offer) => offer._id !== action.payload);
        default:
            return offers;
    }
}