import {
  Firestore,
  getFirestore,
  doc,
  getDoc,
  updateDoc,
  setDoc,
} from "firebase/firestore";
import { app } from "../firebaseConfig";

const db: Firestore = getFirestore(app);

// Función para decrementar el contador
const decrementCount = async (docId: string): Promise<void> => {
  const docRef = doc(db, "counter", docId); // Obtener la referencia al documento

  const docSnap = await getDoc(docRef); // Obtenemos el documento

  if (docSnap.exists()) {
    const data = docSnap.data() as { count: number } | undefined;
    if (data && data.count > 0) {
      await updateDoc(docRef, { count: data.count - 1 });
    } else {
    }
  } else {
    await setDoc(docRef, { count: 0 });
  }
};

export default decrementCount;
