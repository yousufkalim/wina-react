export const baseUrl = process.env.API || "http://localhost:5000/api/v1";
export const baseUri = "http://localhost:5000";
export const token = localStorage.getItem("token");
export const user = JSON.parse(localStorage.getItem("user"));
export const api = `${baseUrl}`;

export const generatePublicUrl = (fileName) => {
  return `${baseUrl}/images/${fileName}`;
};
