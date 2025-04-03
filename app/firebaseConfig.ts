import { initializeApp } from "firebase/app";
import { getAnalytics, Analytics } from "firebase/analytics";
import { getFirestore, Firestore } from "firebase/firestore";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDcWDySU6y7gY-d8y2bWIvycqN33N7-j14",
  authDomain: "pulpometro-9abc9.firebaseapp.com",
  projectId: "pulpometro-9abc9",
  storageBucket: "pulpometro-9abc9.firebasestorage.app",
  messagingSenderId: "173399229583",
  appId: "1:173399229583:web:d539c285753e1af089dcfa",
  measurementId: "G-YX7QZTSTC2"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const analytics: Analytics | null = typeof window !== "undefined" ? getAnalytics(app) : null;
const db: Firestore = getFirestore(app);

export { app, analytics, db };
