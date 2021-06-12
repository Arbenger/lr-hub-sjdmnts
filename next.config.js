const withTM = require('next-transpile-modules')([
   'frappe-charts',
   'react-frappe-charts',
   'firebase',
]);
module.exports = withTM({
   images: {
      domains: ['lh3.googleusercontent.com'],
   },
   env: {
      apiKey: 'AIzaSyBFeM2425df_f9d24TDxJqzRy4Lp8Cgo0w',
      authDomain: 'lr-hub-sjdmnts.firebaseapp.com',
      projectId: 'lr-hub-sjdmnts',
      storageBucket: 'lr-hub-sjdmnts.appspot.com',
      messagingSenderId: '352114457828',
      appId: '1:352114457828:web:d73022558aae6c5b8a80f1',
      measurementId: 'G-V7YGZ03RCY',
      secretAPIAccessKey:
         'Yin and yang, male and female, strong and weak, rigid and tender, heaven and earth, light and darkness, thunder and lightning, cold and warmth, good and evil... the interplay of opposite principles constitutes the universe',
   },
});
