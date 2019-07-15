import Firebase from 'firebase'
const firebaseApp = Firebase.initializeApp({
    apiKey: "AIzaSyDtJOqTME1Me1Q1TjPBoFNZBM18opWajQ8",
    authDomain: "presents-users.firebaseapp.com",
    databaseURL: "https://presents-users.firebaseio.com",
    projectId: "presents-users",
    storageBucket: "presents-users.appspot.com",
    messagingSenderId: "145044826846",
    appId: "1:145044826846:web:b464b619237e2310"
});
export const db = firebaseApp.firestore() 
export const storage = firebaseApp.storage() 
export const auth = firebaseApp.auth() 
export const notif = firebaseApp.messaging() 
export const firebase = firebaseApp