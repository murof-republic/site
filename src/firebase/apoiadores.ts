import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

export interface Apoiador {
    id: string;
    nome: string;
    descrição: string;
    avatar: string;
    artista: boolean;
}

export async function buscarApoiadores(): Promise<Apoiador[]> {
    const snapshot = await getDocs(collection(db, "apoiadores"));

    return snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
    })) as Apoiador[];
}