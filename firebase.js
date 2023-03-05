// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";

// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyDQkhZIsyjBRhlkUzHY8VGizAsaC8okz54",
    authDomain: "hotdog-app-4238b.firebaseapp.com",
    databaseURL: "https://hotdog-app-4238b-default-rtdb.firebaseio.com",
    projectId: "hotdog-app-4238b",
    storageBucket: "hotdog-app-4238b.appspot.com",
    messagingSenderId: "137914380810",
    appId: "1:137914380810:web:a56c134a59f1e10dbde5f3"
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

export default app;