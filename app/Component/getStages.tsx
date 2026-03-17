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

type travel = {
    stage: number,
    route: string,
    distance_km: number,
    description: string
};


// const arrayTravel: travel[] = [
//     {
//         "stage": 1,
//         "route": "Grandas de Salime → A Fonsagrada",
//         "distance_km": 25.2,
//         "description": "Etapa dura con la subida al Alto del Acebo; vistas espectaculares."
//     },
//     {
//         "stage": 2,
//         "route": "A Fonsagrada → O Cádavo Baleira",
//         "distance_km": 24.3,
//         "description": "Tramo de montaña con desniveles pero muy bonito."
//     },
//     {
//         "stage": 3,
//         "route": "O Cádavo Baleira → Lugo",
//         "distance_km": 29.5,
//         "description": "Etapa más larga pero cómoda, sin grandes subidas."
//     },
//     {
//         "stage": 4,
//         "route": "Lugo → Ponte Ferreira",
//         "distance_km": 26.5,
//         "description": "Camino tranquilo por aldeas y asfalto rural. Albergues en Ferreira y San Román."
//     },
//     {
//         "stage": 5,
//         "route": "Ponte Ferreira → Mélide → Arzúa",
//         "distance_km": 34.1,
//         "description": "Etapa larga pero se puede hacer bien: pasa por As Seixas, Hospital das Seixas, y entronca con el Camino Francés antes de Arzúa."
//     },
//     {
//         "stage": 6,
//         "route": "Arzúa → O Pedrouzo",
//         "distance_km": 19.3,
//         "description": "Etapa cómoda, terreno suave."
//     },
//     {
//         "stage": 7,
//         "route": "O Pedrouzo → Santiago de Compostela",
//         "distance_km": 19.4,
//         "description": "Última etapa: llegada triunfal a la Catedral."
//     }
// ]

// const PostTravel = async (): Promise<void> => {
//     const docRef = doc(db, "counter", "travel");

//     try {
//         await setDoc(docRef, { stages: arrayTravel });
//     } catch (error) {
//         console.error("Error saving travel stages: ", error);
//     }
// };

// export default PostTravel;


export type TravelStage = {
    stage: number;
    route: string;
    distance_km: number;
    description: string;
};

const getStages = async (): Promise<TravelStage[]> => {
    const docRef = doc(db, "counter", "travel");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        const data = docSnap.data();

        // data.stages debería ser tu array
        const stages: TravelStage[] = (data.stages ?? []).map((s: any) => ({
            stage: s.stage ?? 0,
            route: s.route ?? "",
            distance_km: s.distance_km ?? 0,
            description: s.description ?? "",
        }));

        return stages;
    } else {
        console.error("No existe el documento, inicializando...");
        // devolver array vacío o con un stage por defecto
        return [{ stage: 0, route: "", distance_km: 0, description: "" }];
    }
};

export default getStages;