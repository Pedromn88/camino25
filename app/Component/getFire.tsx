import { Firestore, getFirestore, doc, getDoc } from "firebase/firestore";
import { app } from "../firebaseConfig";

const db: Firestore = getFirestore(app);

const getCount = async (
  docId: string
): Promise<{ count: number; limits: number }> => {
  const docRef = doc(db, "counter", docId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const data = docSnap.data() as { count?: number; limits?: number };
    return {
      count: data.count ?? 0,
      limits: data.limits ?? 0,
    };
  } else {
    console.log("No existe el documento, inicializando...");
    return { count: 0, limits: 0 };
  }
};

export default getCount;
