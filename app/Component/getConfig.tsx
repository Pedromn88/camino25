import { Firestore, getFirestore, doc, getDoc } from "firebase/firestore";
import { app } from "../firebaseConfig";

const db: Firestore = getFirestore(app);

const getConfig = async (
): Promise<{ map?: boolean; security?: boolean, total?: number[] }> => {
    const docRef = doc(db, "counter", "config");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        const data = docSnap.data() as { map?: boolean; security?: boolean, total?: number[] };
        return {
            map: data.map ?? false,
            security: data.security ?? false,
            total: data.total ?? [],
        };
    } else {
        console.error("No existe el documento, inicializando...");
        return { map: true, security: true, total: [] };
    }
};

export default getConfig;