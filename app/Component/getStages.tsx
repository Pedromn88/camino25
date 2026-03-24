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



export type TravelStage = {
    stage: number;
    route: string;
    distance_km: number;
    description: string;
    complete: boolean;
};

const getStages = async (): Promise<TravelStage[]> => {
    const docRef = doc(db, "counter", "travel");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        const data = docSnap.data();

        const stages: TravelStage[] = (data.stages ?? []).map((s: any) => ({
            stage: s.stage ?? 0,
            route: s.route ?? "",
            distance_km: s.distance_km ?? 0,
            description: s.description ?? "",
            complete: s.complete ?? false,
        }));

        return stages;
    } else {
        console.error("No existe el documento, inicializando...");
        return [{ stage: 0, route: "", distance_km: 0, description: "", complete: false }];
    }
};

export default getStages;