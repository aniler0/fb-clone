import firebase from 'firebase';



const firebaseConfig = {
    apiKey: "AIzaSyCYC1b_eSw3ICE3GAOSisuHkNgiYpLA-e0",
    authDomain: "facebook-clone-a3200.firebaseapp.com",
    databaseURL: "https://facebook-clone-a3200.firebaseio.com",
    projectId: "facebook-clone-a3200",
    storageBucket: "facebook-clone-a3200.appspot.com",
    messagingSenderId: "952747932291",
    appId: "1:952747932291:web:2e0f6e1af1a7789bd779b6",
    measurementId: "G-4HHGYY4XDQ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;