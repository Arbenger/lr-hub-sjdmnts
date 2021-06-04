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
      "EAANM4cgOp3QBAKQx2aFkmwZCsZBHFNMZAYPYiYYedwwxFZBPEpetD1t3hpdAzKB3DAn3kzSoNYxtASZC0ApQJZBjhz4tdEjtBZAxowCEpJilNMGhto12FwXptGIoHxd5BZCP8bSNklRs1v2GVuZAv2il6EMYL1lL7ieiKQLTW6940Ff8HFWDII7jdlis8kUJqnxjKkc9B5RjqeDhhTZA0YtLxHPzZAhLaWXDrK0wkEnXVZCyz1H095OYoioG",
  },
});
