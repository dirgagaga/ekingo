import { ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-storage.js";
import { storage } from './firebase-config.js';

// Fungsi untuk mengunggah gambar laporan
export async function uploadImage(file, userId, day) {
    if (!file) return null;
    
    // Membuat path file yang unik: reports/{userId}/{tanggal}-{namaHari}-{namaFileAsli}
    const date = new Date().toISOString().split('T')[0];
    const filePath = `reports/${userId}/${date}-${day}-${file.name}`;
    const storageRef = ref(storage, filePath);

    try {
        const snapshot = await uploadBytes(storageRef, file);
        const downloadURL = await getDownloadURL(snapshot.ref);
        return downloadURL;
    } catch (error) {
        console.error("Error uploading image:", error);
        return null;
    }
}
