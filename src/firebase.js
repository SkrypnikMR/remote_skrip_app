import firebase from 'firebase';
const config = {
    apiKey: 'AIzaSyDRB7g2KN_0yzxQVZXnV0rSSivojExOfYs',
    authDomain: 'remoteskrdatabase.firebaseapp.com',
    databaseURL: 'https://remoteskrdatabase-default-rtdb.europe-west1.firebasedatabase.app',
    projectId: 'remoteskrdatabase',
    storageBucket: 'remoteskrdatabase.appspot.com',
    messagingSenderId: '883449255229',
    appId: '1:883449255229:web:3bbc4c7bcce124ab7fa154',
    measurementId: 'G-S1Y7QWDW2K'
};
firebase.initializeApp(config);
firebase.analytics();


export default firebase;