import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAEvgtYTOPi61XiQfOm6qtvqXtgfFR5sjA",
    authDomain: "ecomerce-project-1b6a3.firebaseapp.com",
    databaseURL: "https://ecomerce-project-1b6a3.firebaseio.com",
    projectId: "ecomerce-project-1b6a3",
    storageBucket: "ecomerce-project-1b6a3.appspot.com",
    messagingSenderId: "874147257314",
    appId: "1:874147257314:web:2335f0395f18479df037bb",
    measurementId: "G-D9WF03KJDG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };