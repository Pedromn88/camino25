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

type GeoLocation = {
  latitude: number;
  longitude: number;
  idCount: number;
};

const decrementCount = async (docId: string): Promise<void> => {
  const docRef = doc(db, "counter", docId);

  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const data = docSnap.data() as {
      count?: number;
      geoLocation?: GeoLocation[];
    };

    const currentCount = data.count ?? 0;

    if (currentCount > 0) {
      const newGeoLocations = (data.geoLocation ?? []).filter(
        (item) => item.idCount !== currentCount
      );

      await updateDoc(docRef, {
        count: currentCount - 1,
        geoLocation: newGeoLocations,
      });
    }
  } else {
    await setDoc(docRef, { count: 0, geoLocation: [] });
  }
};

export default decrementCount;
