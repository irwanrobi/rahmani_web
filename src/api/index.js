import axios from 'axios';

// const url = process.env.REACT_APP_API_URL;
const url = `https://nodejs-rahmani-backend.herokuapp.com`;

export const fetchOfferMessages = () => axios.get(`${url}/offers`);
export const fetchOfferMessageDetail = (id) => axios.get(`${url}/offers/${id}`);
export const createOfferMessage = (newOfferMessage) => axios.post(`${url}/offers`, newOfferMessage);
export const updateOfferMessage = (id, updatedOfferMessage) => axios.patch(`${url}/offers/${id}`, updatedOfferMessage);
export const deleteOfferMessage = (id) => axios.delete(`${url}/offers/${id}`);

export const fetchArticles = () => axios.get(`${url}/articles`); 
export const fetchArticleDetail = (id) => axios.get(`${url}/articles/${id}`);

export const fetchArticlesList = () => axios.get('https://blog.konsultanlegalisasi.com/wp-json/wp/v2/posts?_fields[]=title&_fields[]=link&_fields[]=excerpt&_fields[]=_links&_fields[]=slug'); 

export const loginUser = (userData) => axios.post(`${url}/auth/login`, userData);