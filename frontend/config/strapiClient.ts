import axios from "axios";

export const strapiClient = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_STRAPI_API_HOST}`,
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export const post = async (path: string, params: unknown) => {
  return await strapiClient.post(path, params);
};
