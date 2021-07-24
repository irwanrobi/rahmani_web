import { FETCH_ALL_OFFERS, CREATE_OFFER, UPDATE_OFFER, DELETE_OFFER } from '../constants/actionTypes';

import * as api from '../api';

// Action Creators
export const getOfferMessages = () => async (dispatch) => {

    try {
        const { data } = await api.fetchOfferMessages();

        dispatch({ type: FETCH_ALL_OFFERS, payload: data });
    } catch (error) {
        console.log(error.message)
    }
    
}

export const createOfferMessage = (offermessage) => async (dispatch) => {
    try {
        const { data } = await api.createOfferMessage(offermessage);
        dispatch({ type: CREATE_OFFER, payload: data });
    } catch (error) {
        console.log(error.message);
    }
}