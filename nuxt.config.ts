// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/leaflet",
    "@nuxt/eslint",
    "@sidebase/nuxt-auth",
    "shadcn-nuxt",
    "nuxt-lucide-icons",
  ],
  shadcn: {
    prefix: "",
    componentDir: "./components/ui",
  },
  auth: {
    baseURL: "http://localhost:8000/auth/",
    provider: {
      type: "local",
      endpoints: {
        signIn: { path: "", method: "post" },
        signOut: { path: "logout", method: "post" },
        signUp: { path: "register", method: "post" },
        getSession: { path: "session", method: "get" },
      },
      token: {
        signInResponseTokenPointer: "/token",
        type: "Bearer",
        cookieName: "auth.token",
        headerName: "Authorization",
        maxAgeInSeconds: 3600,
        sameSiteAttribute: "lax",
        cookieDomain: "sidebase.io",
        secureCookieAttribute: false,
        httpOnlyCookieAttribute: false,
      },
      refresh: {
        isEnabled: true,
        endpoint: { path: "/refresh", method: "post" },
        refreshOnlyToken: true,
        token: {
          signInResponseRefreshTokenPointer: "/refresh-token",
          refreshRequestTokenPointer: "Bearer",
          cookieName: "auth.token",
          maxAgeInSeconds: 1800,
          sameSiteAttribute: "lax",
          secureCookieAttribute: false,
          cookieDomain: "sidebase.io",
          httpOnlyCookieAttribute: false,
        },
      },
    },
  },
});