import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC4Knl6yYO7O5NBHgjj7AQ-rk2CxJMkjGc",
  authDomain: "vitpune-ecell.firebaseapp.com",
  projectId: "vitpune-ecell",
  storageBucket: "vitpune-ecell.firebasestorage.app",
  messagingSenderId: "1066076241298",
  appId: "1:1066076241298:web:bfb07ece9030059b9ad54b"
};

const app = initializeApp(firebaseConfig);

export default app;
