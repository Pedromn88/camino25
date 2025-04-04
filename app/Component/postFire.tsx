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

const incrementCount = async (
  docId: string,
  field: string = "count",
  limits: number
): Promise<void> => {
  const docRef = doc(db, "counter", docId);

  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    const data = docSnap.data() as
      | { count?: number; limits?: number }
      | undefined;
    if (data && field === "count") {
      await updateDoc(docRef, {
        count: data.count && data.count > 0 ? data.count + 1 : 1,
      });
    } else if (data && field === "limits") {
      await updateDoc(docRef, { limits: limits });
    }
  } else {
    await setDoc(docRef, { count: 1 });
  }
};

export default incrementCount;
