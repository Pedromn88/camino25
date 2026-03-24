import {
    Firestore,
    getFirestore,
    doc,
    getDoc,
    updateDoc,
} from "firebase/firestore";
import { app } from "../firebaseConfig";

const db: Firestore = getFirestore(app);

type TravelStage = {
    stage: number;
    route: string;
    distance_km: number;
    description: string;
    complete?: boolean;
};

export const completeStage = async (stageNumber: number) => {
    const docRef = doc(db, "counter", "travel");
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
        console.error("No existe el documento");
        return;
    }

    const data = docSnap.data();

    const stages: TravelStage[] = (data.stages ?? []).map((s: any) => ({
        stage: s.stage ?? 0,
        route: s.route ?? "",
        distance_km: s.distance_km ?? 0,
        description: s.description ?? "",
        complete: s.complete ?? false,
    }));

    // 🔥 modificamos la etapa concreta
    const updatedStages = stages.map((s) =>
        s.stage === stageNumber ? { ...s, complete: true } : s
    );

    // 🔥 guardamos TODO el array actualizado
    await updateDoc(docRef, {
        stages: updatedStages,
    });

    console.log(`Stage ${stageNumber} completada`);
};   