import axios from "axios";

export const strapiClient = axios.create({
  baseURL: `http://127.0.0.1:1337/api`,
  headers: {
    Accept: "*/*",
    "Content-Type": "application/json",
  },
});

export const post = async (path: string, params: unknown) => {
  return await strapiClient.post(path, params);
};
