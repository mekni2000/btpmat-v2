// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  endpoint: 'https://api.btpmat.ci/api/',
  firebaseConfig : {
    apiKey: "AIzaSyCeMolkRnW1EpEJ3nLQFgCIk7k-_LwS0l4",
    authDomain: "btpmat-78585.firebaseapp.com",
    databaseURL: "https://btpmat-78585.firebaseio.com",
    projectId: "btpmat-78585",
    storageBucket: "btpmat-78585.appspot.com",
    messagingSenderId: "54100857214",
    appId: "1:54100857214:web:56279ef69baefadb36e32f"
  },
  modes: {
      POPUP: 'popup',
      REDIRECT: 'redirect'
  },
  providers: {
      GOOGLE: 'google',
      FACEBOOK: 'facebook'
  }


}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
