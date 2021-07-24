import axios from 'axios';

const url = process.env.REACT_APP_API_URL;

export const fetchOfferMessages = () => axios.get(`${url}/offers`);
export const fetchOfferMessageDetail = (id) => axios.get(`${url}/offers/${id}`);
export const createOfferMessage = (newOfferMessage) => axios.post(`${url}/offers`, newOfferMessage);
export const updateOfferMessage = (id, updatedOfferMessage) => axios.patch(`${url}/offers/${id}`, updatedOfferMessage);
export const deleteOfferMessage = (id) => axios.delete(`${url}/offers/${id}`);

export const fetchArticles = () => axios.get(`${url}/articles`); 
export const fetchArticleDetail = (id) => axios.get(`${url}/articles/${id}`);

export const loginUser = (userData) => axios.post(`${url}/auth/login`, userData);