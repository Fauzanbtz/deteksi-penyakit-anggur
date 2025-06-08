// src/lib/disease-data.ts

// Definisikan tipe untuk data kita agar lebih terstruktur
interface DiseaseInfo {
    [key: string]: string;
  }
  
  // Ini adalah "kamus" atau database informasi penanganan kita.
  // PENTING: Key (misal: 'Grape___Black_rot') harus SAMA PERSIS dengan label dari model Anda.
  export const diseaseTreatments: DiseaseInfo = {
    'Grape___Black_rot': `
  ### 🍇 Grape — **Black Rot**
  **Penyebab:** *Jamur* ***Guignardia bidwellii***
  
  **🛠️ Penanganan:**
  
  - 🧹 **Sanitasi**  
    Buang dan musnahkan semua buah, daun, dan sulur yang terinfeksi dari musim sebelumnya untuk mengurangi sumber spora.
  
  - 🌬️ **Sirkulasi Udara**  
    Lakukan pemangkasan untuk meningkatkan aliran udara di sekitar tandan buah, membantu daun dan buah cepat kering.
  
  - 🧪 **Fungisida**  
    Aplikasikan fungisida pelindung seperti **Mancozeb** atau **Captan**, dimulai sebelum bunga mekar dan lanjutkan setiap 7–14 hari hingga buah matang.
  `,
  
    'Grape___Esca_(Black_Measles)': `
  ### 🍇 Grape — **Esca (Black Measles)**
  **Penyebab:** *Kompleks jamur yang menyerang kayu*
  
  **🛠️ Penanganan:**
  
  - ✂️ **Pemangkasan**  
    Potong cabang yang terinfeksi hingga terlihat kayu sehat. Bersihkan alat dengan alkohol/pemutih setiap kali pemotongan.
  
  - 🛡️ **Perlindungan Luka**  
    Olesi luka potong dengan cat pelindung atau pasta fungisida untuk cegah infeksi baru.
  
  - 💧 **Manajemen Stres**  
    Hindari stres seperti kekeringan atau pemupukan berlebihan agar tanaman lebih kuat melawan penyakit.
  `,
  
    'Grape___Leaf_blight_(Isariopsis_Leaf_Spot)': `
  ### 🍇 Grape — **Leaf Blight (Isariopsis Leaf Spot)**
  **Penyebab:** *Jamur* ***Pseudocercospora vitis***
  
  **🛠️ Penanganan:**
  
  - 🧪 **Fungisida**  
    Gunakan fungisida umum untuk jamur daun. Konsultasikan dengan ahli pertanian setempat untuk rekomendasi terbaik di wilayah Anda.
  
  - 🌬️ **Sirkulasi Udara**  
    Lakukan pemangkasan untuk meningkatkan aliran udara seperti pada penanganan Black Rot.
  
  - 🌿 **Pupuk Seimbang**  
    Pastikan tanaman mendapat nutrisi cukup, terutama **kalium**, karena kekurangannya membuat tanaman lebih rentan.
  `,
  
    'Grape___healthy': `
  ### 🍇 Grape — **Sehat (Healthy)**
  **Kondisi:** Tanaman Anda dalam kondisi sehat! 🌱
  
  **🛠️ Rekomendasi:**
  
  - 👀 **Pemantauan Rutin**  
    Lakukan pengecekan berkala untuk deteksi dini jika ada gejala penyakit.
  
  - ✅ **Praktik Budidaya Baik**  
    Teruskan penyiraman cukup, pemupukan seimbang, dan pemangkasan rutin untuk mempertahankan kesehatan tanaman.
  `
  };
  