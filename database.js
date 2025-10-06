import { collection, addDoc, query, where, getDocs, orderBy } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";
import { db } from './firebase-config.js';

// Menyimpan data laporan ke Firestore
export async function saveReport(reportData) {
    try {
        const docRef = await addDoc(collection(db, "reports"), reportData);
        return { success: true, id: docRef.id };
    } catch (error) {
        console.error("Error adding document: ", error);
        return { success: false, error: error };
    }
}

// Mengambil semua riwayat laporan untuk pengguna tertentu
export async function getReports(userId) {
    try {
        const q = query(
            collection(db, "reports"), 
            where("userId", "==", userId),
            orderBy("createdAt", "desc") // Mengurutkan dari yang terbaru
        );
        
        const querySnapshot = await getDocs(q);
        const reports = [];
        querySnapshot.forEach((doc) => {
            reports.push({ id: doc.id, ...doc.data() });
        });
        return reports;
    } catch (error) {
        console.error("Error getting documents: ", error);
        return [];
    }
}
