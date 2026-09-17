import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: 'AIzaSyDDCrasJrYzGP9EHgdjxUZyNS_zvpMmOQY',
    authDomain: 'murofmee.firebaseapp.com',
    projectId: 'murofmee',
    storageBucket: 'murofmee.firebasestorage.app',
    messagingSenderId: '865619348662',
    appId: '1:865619348662:web:501caa2cd230c09f0c6a17'
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)