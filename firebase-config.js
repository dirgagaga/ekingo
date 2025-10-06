// Salin konfigurasi proyek Firebase Anda di sini
// Anda bisa mendapatkannya dari Pengaturan Proyek > Umum > Aplikasi Web Anda
script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDuPlkoxVPaP4zYdg1akLwGT3Jv_0ptue8",
    authDomain: "ekingo-cfff8.firebaseapp.com",
    projectId: "ekingo-cfff8",
    storageBucket: "ekingo-cfff8.firebasestorage.app",
    messagingSenderId: "780432568401",
    appId: "1:780432568401:web:49e104e045ed5ea57a8870",
    measurementId: "G-VTZPFX85C9"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
const firebaseConfig = {
  apiKey: "AIzaSy...YOUR_API_KEY",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "your-sender-id",
  appId: "1:your-app-id:web:your-web-app-id"
};

// Jangan ubah kode di bawah ini
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-storage.js";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
