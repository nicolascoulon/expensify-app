import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };


/*
my db rules


{
  "rules": {
    ".read": false,
    ".write": false,
      "users": {
        "$user_id": {
           ".read": "$user_id === auth.uid",
   				 ".write": "$user_id === auth.uid",
             "expenses": {
               "$expense_id": {
                 ".validate": "newData.hasChildren(['description', 'note', 'amount', 'createdAt'])",
                  "description": {
                    ".validate": "newData.isString() && newData.val().length > 0"
                  },
                  "note": {
                    ".validate": "newData.isString()"
                  }, 
                  "amount": {
                    ".validate": "newData.isNumber()"
                  }, 
                  "createdAt": {
                    ".validate": "newData.isNumber()"
                  }, 
                  "$other": {
            			".validate": false
          			 }   
               }
             },
           "$other": {
             ".validate": false
           } 
        }
      }
  }
}

*/