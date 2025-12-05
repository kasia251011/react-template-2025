export const STRAPI_ROUTES = {
  ARTICLES: {
    ALL: "/articles",
    SINGLE: (id: string) => `/articles/${id}`,
  }
}