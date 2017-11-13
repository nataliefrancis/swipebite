// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

// export const environment = {
//   production: false
// };

// import { keys } from '../../../back-end/config/env';

export const environment = {
  production: false,
  firebase: {
  	apiKey: "AIzaSyC6X17l-K9HeNIzqu6_l7Kq1QcrsPqLgB8",
    authDomain: "swipebite-185605.firebaseapp.com",
    databaseURL: "https://swipebite-185605.firebaseio.com",
    projectId: "swipebite-185605",
    storageBucket: "swipebite-185605.appspot.com",
    messagingSenderId: "19554436958"
   }
};
