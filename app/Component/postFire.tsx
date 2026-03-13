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

const incrementCount = async (
  docId: string,
  field: string = "count",
  limits: number,
  geoLocation: { latitude: number; longitude: number } | null
): Promise<void> => {
  const docRef = doc(db, "counter", docId);

  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const data = docSnap.data() as {
      count?: number;
      limits?: number;
      geoLocation?: GeoLocation[];
    };

    if (field === "count") {
      const newCount = (data.count ?? 0) + 1;

      let newGeoLocations = data.geoLocation ?? [];
      if (geoLocation) {
        newGeoLocations = [
          ...newGeoLocations,
          {
            latitude: geoLocation.latitude,
            longitude: geoLocation.longitude,
            idCount: newCount,
          },
        ];
      }

      await updateDoc(docRef, {
        count: newCount,
        geoLocation: newGeoLocations,
      });
    }
    if (field === "limits") {
      await updateDoc(docRef, { limits: limits });
    }
  } else {
    const initialGeo = geoLocation
      ? [
        {
          latitude: geoLocation.latitude,
          longitude: geoLocation.longitude,
          idCount: field,
        },
      ]
      : [];

    await setDoc(docRef, {
      count: field,
      limits: limits,
      geoLocation: initialGeo,
    });
  }
};

export default incrementCount;
