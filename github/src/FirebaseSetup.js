import {initializeApp} from "firebase/app";
import {getDatabase} from "firebase/database";


const FirebaseConfig= {
    apiKey: "AIzaSyB8q6gdwaMXseUKy_Ip3SGPFhxPJ4kVq5I",
    authDomain: "bookmanagement-crud.firebaseapp.com",
    projectId: "bookmanagement-crud",
    storageBucket: "bookmanagement-crud.appspot.com",
    messagingSenderId: "439601163343",
    appId: "1:439601163343:web:3869e80a60ffc57c014e3a"
};

export const FirebaseApplication= initializeApp(FirebaseConfig);
export const FirebaseDatabase = getDatabase(FirebaseApplication);
