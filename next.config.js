const withTM = require("next-transpile-modules")([
  "frappe-charts",
  "react-frappe-charts",
]);
module.exports = withTM({
  images: {
    domains: ["lh3.googleusercontent.com", "graph.facebook.com"],
  },
  env: {
    apiKey: "AIzaSyBFeM2425df_f9d24TDxJqzRy4Lp8Cgo0w",
    authDomain: "lr-hub-sjdmnts.firebaseapp.com",
    projectId: "lr-hub-sjdmnts",
    storageBucket: "lr-hub-sjdmnts.appspot.com",
    messagingSenderId: "352114457828",
    appId: "1:352114457828:web:d73022558aae6c5b8a80f1",
    measurementId: "G-V7YGZ03RCY",
    fbAccessToken:
      "EAANM4cgOp3QBAASWBA78ZBD8O8vWMNZBz4d3bP1UQMJr7H3k6KwJ62ZBK4XhIK9sO8GZBrJQnY4K8foP20HYL9qzDNoMxOurW3CAxO5ywTixv23lUQcDhGOa952tZBjW0HjemHE7IbNCZA3kGaeaT3ZAuV4pLMSCeUf0jphqveMkSyZANkycC1pf8DgrvhHeEQQB9yInX6xZAtIw8vmsGP1xCAhJDEZAYic2RF44yKVjnuUBs6Wy4gZCkud",
  },
});

// webpack: (config, { isServer }) => {
//   if (!isServer) {
//     config.node = {
//       fs: "empty",
//     };
//   }
//   return config;
// },
