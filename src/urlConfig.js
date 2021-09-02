export const baseUrl = process.env.REACT_APP_URL;

export const baseUri = process.env.REACT_APP_URI;
export const token = localStorage.getItem("token");
export const user = JSON.parse(localStorage.getItem("user"));
export const api = `${baseUrl}`;

export const generatePublicUrl = (fileName) => {
  return `${baseUrl}/images/${fileName}`;
};
