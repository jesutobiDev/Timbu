import axios from 'axios';

const baseUrl = "https://timbu-get-single-product.reavdev.workers.dev/"
const organizationId = import.meta.env.VITE_ORGANIZATION_ID;
const appId = import.meta.env.VITE_APP_ID;
const apiKey = import.meta.env.VITE_API_KEY;

export const fetchProduct = async (productId) => {
  const productEndpoint = `${baseUrl}${productId}?organization_id=${organizationId}&Appid=${appId}&Apikey=${apiKey}`;
  try {
    const response = await axios.get(productEndpoint);
    return response.data;
  } catch (error) {
    console.error('Error fetching product details:', error);
    throw error;
  }
};
