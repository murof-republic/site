import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "./firebase"

export interface Apoiador {
    id: string
    nome: string
    descrição: string
    avatar: string
}

export async function buscarApoiadores(): Promise<Apoiador[]> {
    const snapshot = await getDocs(collection(db, "apoiadores"))

    return snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
    })) as Apoiador[]
}

export async function buscarArtistas(): Promise<Apoiador[]> {
    const consulta = query(
        collection(db, "apoiadores"),
        where("artista", "==", true)
    )

    const snapshot = await getDocs(consulta)

    return snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
    })) as Apoiador[]
}