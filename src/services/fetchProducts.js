

import axios from 'axios';

export const baseUrl = '/api/';
const apiKey = import.meta.env.VITE_API_KEY;
const organizationId = import.meta.env.VITE_ORGANIZATION_ID;
const appId = import.meta.env.VITE_APP_ID;

export const fetchProducts = async ({ page = 1, size = 9, reverseSort = false }) => {
  const productsEndpoint = `${baseUrl}products?organization_id=${organizationId}&reverse_sort=${reverseSort}&page=${page}&size=${size}&Appid=${appId}&Apikey=${apiKey}`;
  const response = await axios.get(productsEndpoint);
  return response.data;
};
