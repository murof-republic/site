import { collection, getDocs } from "firebase/firestore"
import { db } from "./firebase"

export interface Arte {
    id: string;
    autor: string;
    nome: string
    url: string; 
}

export async function buscarArtes(): Promise<Arte[]> {
    const snapshot = await getDocs(collection(db, "artes"))

    return snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
    })) as Arte[]
}