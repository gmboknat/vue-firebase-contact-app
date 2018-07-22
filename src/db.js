import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyAABoAqN41-P6WZuutFipiNuM8GThMWhgE",
    authDomain: "contact-management-syste-b9738.firebaseapp.com",
    databaseURL: "https://contact-management-syste-b9738.firebaseio.com",
    projectId: "contact-management-syste-b9738",
    storageBucket: "",
    messagingSenderId: "961633278155"
};

var db = firebase.initializeApp(config).database()
export default db