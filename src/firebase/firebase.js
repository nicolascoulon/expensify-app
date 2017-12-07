import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAbngvgAWnwQJ5hEzsKLsOsWGNb0CY__j4",
    authDomain: "expensify-d64f5.firebaseapp.com",
    databaseURL: "https://expensify-d64f5.firebaseio.com",
    projectId: "expensify-d64f5",
    storageBucket: "expensify-d64f5.appspot.com",
    messagingSenderId: "727781192140"
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };