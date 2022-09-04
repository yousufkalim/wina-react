import { baseUrl, url, mediaUrl } from './config';

export { baseUrl };
export const baseUri = url;
export const Image_Uri = mediaUrl;

export const token = localStorage.getItem('token');
export const user = JSON.parse(localStorage.getItem('user'));
export const api = `${baseUrl}`;

export const generatePublicUrl = (fileName) => {
  return `${baseUrl}/images/${fileName}`;
};
