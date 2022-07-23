export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",
  server: {
    port: 3000,
  },
  router: {
    base: "/ycystudio-portfolio/",
  },
  colorMode: {
    classSuffix: "",
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "YCY Web Studio",
    htmlAttrs: {
      lang: "zh-tw",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/app.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // "~/plugins/back-to-top.js"
    { src: "~/plugins/vt-notifications", mode: 'client'},
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/firebase"],

  // Firebase: https://firebase.nuxtjs.org/guide/getting-started
  firebase: {
    config: {
      apiKey: "AIzaSyBIhCZvWTIEH7nZ4s1uU-Q8YfZcy9hfgE8",
      authDomain: "ycywebstudio.firebaseapp.com",
      projectId: "ycywebstudio",
      storageBucket: "ycywebstudio.appspot.com",
      messagingSenderId: "562771751444",
      appId: "1:562771751444:web:039f4cb3fb3ab0f69f6d01",
      measurementId: "G-YYPY1TXMT3",
    },
    services: {
      firestore: true,
    },
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [
      "vt-notifications"
    ],
  },

};
