// export const baseUrl = process.env.API || "http://160.153.249.64:9002/api/v1";

// export const baseUri = "http://160.153.249.64:9002";

export const baseUrl = "https://wina.falconconsulting.fr/api/v1";

export const baseUri = "https://wina.falconconsulting.fr";
export const token = localStorage.getItem("token");
export const user = JSON.parse(localStorage.getItem("user"));
export const api = `${baseUrl}`;

export const generatePublicUrl = (fileName) => {
  return `${baseUrl}/images/${fileName}`;
};
