export const config = {
  BACKEND_URL:
    (import.meta.env.VITE_BACKEND_URL as string) || "/api",
  STRAPI_URL:
    (import.meta.env.VITE_STRAPI_URL as string) || "http://localhost:1337/api",
};
