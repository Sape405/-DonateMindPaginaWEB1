// Configuración de Firebase (Reemplaza con tu configuración real)
const firebaseConfig = {
    apiKey: "AIzaSyCEbqlLRokpxKssJrx3Xr8at_TbQHbNZ7k",
    authDomain: "donatemind-11f45.firebaseapp.com",
    databaseURL: "https://donatemind-11f45-default-rtdb.firebaseio.com",
    projectId: "donatemind-11f45",
    storageBucket: "donatemind-11f45.firebasestorage.app",
    messagingSenderId: "566807311770",
    appId: "1:566807311770:web:d1c8e379b73133035b7623"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
