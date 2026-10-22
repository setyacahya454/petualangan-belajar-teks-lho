/**
 * LHO QUEST: ADVENTURE GAME MAP & INTERACTIVE LEARNING MEDIA
 * Penggabungan Konsep:
 * - Video 1: Illustrated Adventure Game Map dengan Avatar Melompat & 6 Pos Misi
 * - Video 2: Desain Rimba Interaktif Bahasa Indonesia, Daftar Isi Hub, CP/TP, Apersepsi, & Mini Game Word Search
 * 
 * Pengampu: Guru Bahasa Indonesia
 * Materi: Teks Laporan Hasil Observasi (LHO) - SMA Fase E (Kelas X)
 */

// ========================================================
// 1. DATA MASTER MATERI PEMBELAJARAN (BAGIAN A S.D. F)
// ========================================================
const GAME_ZONES_DATA = [
  // ------------------------------------------------------
  // ZONA 1: GERBANG KEBENARAN (BAGIAN A)
  // ------------------------------------------------------
  {
    id: 1,
    title: "Gerbang Kebenaran",
    subtitle: "Hakikat, Ciri-Ciri, & Tiga Struktur Utama Teks LHO",
    nodeCoord: { x: 120, y: 460 },
    subtopics: [
      {
        id: "1-1",
        title: "1. Pengertian Teks LHO",
        icon: "fa-book-open",
        render: () => `
          <div style="margin-bottom: 14px;">
            <h3 style="color: #166534; font-family: var(--font-title); font-size: 1.2rem; margin-bottom: 4px;">
              Pengertian Teks Laporan Hasil Observasi (LHO)
            </h3>
            <p style="color: #64748b; font-size: 0.85rem;">Memahami hakikat teks berbasis pengamatan nyata di lapangan</p>
          </div>

          <p style="margin-bottom: 14px; line-height: 1.6; color: #1e293b;">
            <b>Teks laporan hasil observasi (LHO)</b> adalah teks yang berisi penjabaran umum atau melaporkan sesuatu berupa hasil dari <b>pengamatan (observasi)</b> langsung di lapangan. 
            Teks ini kerap disebut <b>teks klasifikasi</b> karena memuat pengelompokan jenis-jenis sesuatu berdasarkan kriteria ilmiah tertentu.
          </p>

          <div class="mat-concept-grid">
            <div class="mat-card">
              <h4><i class="fa-solid fa-circle-info" style="color: #16a34a;"></i> 1. Informatif</h4>
              <p>Memberikan informasi yang berguna, berbasis data fakta ilmiah, dan memperluas wawasan pembaca mengenai objek yang diobservasi.</p>
            </div>
            <div class="mat-card">
              <h4><i class="fa-solid fa-comments" style="color: #0284c7;"></i> 2. Komunikatif</h4>
              <p>Menggunakan bahasa yang efektif dan lugas sehingga isi laporan mudah dipahami tanpa menimbulkan tafsiran ganda.</p>
            </div>
            <div class="mat-card">
              <h4><i class="fa-solid fa-scale-balanced" style="color: #d97706;"></i> 3. Objektif</h4>
              <p>Wajib disajikan <b>sesuai dengan kenyataan lapangan</b>, tanpa prasangka pribadi, tidak dilebih-lebihkan, dan tidak dikurangi.</p>
            </div>
          </div>

          <div style="background: #f0fdf4; border-left: 4px solid #16a34a; padding: 12px 16px; border-radius: 8px; margin-top: 14px; font-size: 0.86rem; color: #166534;">
            <b>💡 Tujuan Teks LHO:</b> Untuk mendapatkan penjelasan rinci dan akurat mengenai suatu hal dari sudut pandang keilmuan kepada pembaca.
          </div>
        `
      },
      {
        id: "1-2",
        title: "2. Ciri-Ciri Khas Teks LHO",
        icon: "fa-list-check",
        render: () => `
          <div style="margin-bottom: 14px;">
            <h3 style="color: #166534; font-family: var(--font-title); font-size: 1.2rem; margin-bottom: 4px;">
              Ciri-Ciri Khas Teks LHO
            </h3>
            <p style="color: #64748b; font-size: 0.85rem;">Karakteristik yang membedakan Teks LHO dengan teks fiksi atau artikel opini</p>
          </div>

          <div style="display: flex; flex-direction: column; gap: 10px;">
            <div style="display: flex; gap: 12px; align-items: flex-start; background: #f8fafc; padding: 12px; border-radius: 10px; border: 1px solid #e2e8f0;">
              <span style="background: #dcfce7; color: #166534; font-weight: 800; width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">a</span>
              <div>
                <b style="color: #1e293b;">Berisi Ilmu tentang Suatu Objek:</b>
                <p style="font-size: 0.84rem; color: #475569; margin-top: 2px;">Isi pembahasan berupa pengetahuan ilmiah tentang objek yang diamati (fauna, flora, teknologi, lingkungan).</p>
              </div>
            </div>

            <div style="display: flex; gap: 12px; align-items: flex-start; background: #f8fafc; padding: 12px; border-radius: 10px; border: 1px solid #e2e8f0;">
              <span style="background: #dcfce7; color: #166534; font-weight: 800; width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">b</span>
              <div>
                <b style="color: #1e293b;">Objek Bersifat Sangat Umum (Klasifikasi Golongan):</b>
                <p style="font-size: 0.84rem; color: #475569; margin-top: 2px;">Menjelaskan kelompok atau kategori umum objek secara keseluruhan, bukan individu tertentu (contoh: <i>Pohon Bakau</i> secara umum, bukan <i>Pohon Bakau di kebun paman</i>).</p>
              </div>
            </div>

            <div style="display: flex; gap: 12px; align-items: flex-start; background: #f8fafc; padding: 12px; border-radius: 10px; border: 1px solid #e2e8f0;">
              <span style="background: #dcfce7; color: #166534; font-weight: 800; width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">c</span>
              <div>
                <b style="color: #1e293b;">Sudut Pandang Saintifik & Sistematis:</b>
                <p style="font-size: 0.84rem; color: #475569; margin-top: 2px;">Menjabarkan rincian objek menjadi definisi, klasifikasi taksonomi, dan morfologi fisik secara runtut.</p>
              </div>
            </div>

            <div style="display: flex; gap: 12px; align-items: flex-start; background: #f8fafc; padding: 12px; border-radius: 10px; border: 1px solid #e2e8f0;">
              <span style="background: #dcfce7; color: #166534; font-weight: 800; width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">d</span>
              <div>
                <b style="color: #1e293b;">Objektif: Sesuai Kenyataan:</b>
                <p style="font-size: 0.84rem; color: #475569; margin-top: 2px;">Tidak kurang dan tidak lebih, bebas dari keberpihakan emosi atau imajinasi fiktif penulis.</p>
              </div>
            </div>
          </div>
        `
      },
      {
        id: "1-3",
        title: "3. Tiga Struktur Utama Teks LHO",
        icon: "fa-cubes",
        render: () => `
          <div style="margin-bottom: 14px;">
            <h3 style="color: #166534; font-family: var(--font-title); font-size: 1.2rem; margin-bottom: 4px;">
              Tiga Struktur Utama Teks LHO
            </h3>
            <p style="color: #64748b; font-size: 0.85rem;">Pernyataan Umum &rarr; Deskripsi Bagian &rarr; Deskripsi Manfaat</p>
          </div>

          <div class="inspector-sample-box">
            <div class="inspector-btn-row">
              <span style="font-family: var(--font-title); font-size: 0.8rem; font-weight: 700; align-self: center; margin-right: 6px;">Uji Sorot Struktur:</span>
              <button class="btn-highlighter btn-hl-all active" onclick="highlightStructure('all')">Lihat Semua</button>
              <button class="btn-highlighter btn-hl-gen" onclick="highlightStructure('gen')">1. Pernyataan Umum</button>
              <button class="btn-highlighter btn-hl-part" onclick="highlightStructure('part')">2. Deskripsi Bagian</button>
              <button class="btn-highlighter btn-hl-ben" onclick="highlightStructure('ben')">3. Deskripsi Manfaat</button>
            </div>

            <div id="para-general" class="reading-para para-gen">
              <b style="color: #166534; display: block; margin-bottom: 4px;"><i class="fa-solid fa-tag"></i> [1. PERNYATAAN UMUM / KLASIFIKASI]</b>
              Pohon bakau (<i>Rhizophora</i>) adalah jenis vegetasi pantai khas muara tropis. Tumbuhan ini tergolong ke dalam famili <i>Rhizophoraceae</i> dan merupakan pelindung alami kawasan pesisir dari ancaman abrasi gelombang laut.
            </div>

            <div id="para-part" class="reading-para para-part">
              <b style="color: #0369a1; display: block; margin-bottom: 4px;"><i class="fa-solid fa-tag"></i> [2. DESKRIPSI BAGIAN]</b>
              Pohon bakau memiliki sistem perakaran tunjang yang kokoh menancap di substrat lumpur berpasir. Batang bakau berkulit tebal dengan diameter hingga 50 cm. Daunnya tebal berkutikula lilin untuk menahan penguapan, sedangkan bunganya mekar berwarna putih kekuningan.
            </div>

            <div id="para-benefit" class="reading-para para-ben">
              <b style="color: #b45309; display: block; margin-bottom: 4px;"><i class="fa-solid fa-tag"></i> [3. DESKRIPSI MANFAAT]</b>
              Ekosistem bakau memiliki manfaat ekologis vital, yaitu sebagai pemecah gelombang tsunami, tempat pembibitan ikan dan udang, serta penyerap emisi karbon dioksida. Kayunya juga dimanfaatkan masyarakat pesisir sebagai bahan baku arang berkualitas tinggi.
            </div>
          </div>
        `
      }
    ]
  },

  // ------------------------------------------------------
  // ZONA 2: LEMBAH ADIKSIMBA (BAGIAN B)
  // ------------------------------------------------------
  {
    id: 2,
    title: "Lembah Adiksimba",
    subtitle: "Makna Kata Ilmiah, Formula Adiksimba (5W+1H), & Komparasi Teks",
    nodeCoord: { x: 240, y: 160 },
    subtopics: [
      {
        id: "2-1",
        title: "1. Formula Adiksimba (5W + 1H)",
        icon: "fa-magnifying-glass",
        render: () => `
          <div style="margin-bottom: 14px;">
            <h3 style="color: #0369a1; font-family: var(--font-title); font-size: 1.2rem; margin-bottom: 4px;">
              Formula Pokok Informasi: Adiksimba (5W + 1H)
            </h3>
            <p style="color: #64748b; font-size: 0.85rem;">Enam pertanyaan kunci pengumpul data observasi ilmiah</p>
          </div>

          <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px;">
            <div style="background: #f0f9ff; border: 1.5px solid #bae6fd; padding: 10px; border-radius: 8px;">
              <b style="color: #0369a1;">A - Apa (What)</b>
              <p style="font-size: 0.82rem; color: #334155; margin-top: 2px;">Menanyakan objek atau fenomena yang diamati.</p>
            </div>
            <div style="background: #f0f9ff; border: 1.5px solid #bae6fd; padding: 10px; border-radius: 8px;">
              <b style="color: #0369a1;">Di - Di mana (Where)</b>
              <p style="font-size: 0.82rem; color: #334155; margin-top: 2px;">Menanyakan lokasi habitat atau tempat observasi.</p>
            </div>
            <div style="background: #f0f9ff; border: 1.5px solid #bae6fd; padding: 10px; border-radius: 8px;">
              <b style="color: #0369a1;">K - Kapan (When)</b>
              <p style="font-size: 0.82rem; color: #334155; margin-top: 2px;">Menanyakan waktu pengamatan atau kemunculan objek.</p>
            </div>
            <div style="background: #f0f9ff; border: 1.5px solid #bae6fd; padding: 10px; border-radius: 8px;">
              <b style="color: #0369a1;">Si - Siapa (Who)</b>
              <p style="font-size: 0.82rem; color: #334155; margin-top: 2px;">Menanyakan subjek peneliti atau pihak yang diobservasi.</p>
            </div>
            <div style="background: #f0f9ff; border: 1.5px solid #bae6fd; padding: 10px; border-radius: 8px;">
              <b style="color: #0369a1;">M - Mengapa (Why)</b>
              <p style="font-size: 0.82rem; color: #334155; margin-top: 2px;">Menanyakan alasan atau penyebab fenomena terjadi.</p>
            </div>
            <div style="background: #f0f9ff; border: 1.5px solid #bae6fd; padding: 10px; border-radius: 8px;">
              <b style="color: #0369a1;">Ba - Bagaimana (How)</b>
              <p style="font-size: 0.82rem; color: #334155; margin-top: 2px;">Menanyakan rincian proses, kondisi fisik, dan cara kerja.</p>
            </div>
          </div>
        `
      },
      {
        id: "2-2",
        title: "2. Komparasi: LHO vs Teks Eksplanasi",
        icon: "fa-code-compare",
        render: () => `
          <div style="margin-bottom: 14px;">
            <h3 style="color: #0369a1; font-family: var(--font-title); font-size: 1.2rem; margin-bottom: 4px;">
              Komparasi: Teks LHO vs Teks Eksplanasi
            </h3>
            <p style="color: #64748b; font-size: 0.85rem;">Memverifikasi data pengamatan dengan sumber penjelas</p>
          </div>

          <div class="comp-grid-2">
            <div class="comp-box-col col-a">
              <h4 style="color: #166534;"><i class="fa-solid fa-eye"></i> Teks LHO</h4>
              <ul>
                <li><b>Fokus:</b> Klasifikasi dan rincian fisik bagian objek secara statis.</li>
                <li><b>Tujuan:</b> Melaporkan hasil pengamatan dari sudut pandang keilmuan.</li>
                <li><b>Struktur:</b> Pernyataan Umum &rarr; Deskripsi Bagian &rarr; Deskripsi Manfaat.</li>
              </ul>
            </div>

            <div class="comp-box-col col-b">
              <h4 style="color: #0284c7;"><i class="fa-solid fa-diagram-project"></i> Teks Eksplanasi</h4>
              <ul>
                <li><b>Fokus:</b> Proses kronologis sebab-akibat (kausalitas) terjadinya fenomena.</li>
                <li><b>Tujuan:</b> Menjelaskan 'mengapa' dan 'bagaimana' fenomena itu muncul.</li>
                <li><b>Struktur:</b> Pernyataan Umum &rarr; Deretan Penjelas &rarr; Interpretasi.</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "2-3",
        title: "3. Empat Cara Cari Makna Kata Ilmiah",
        icon: "fa-spell-check",
        render: () => `
          <div style="margin-bottom: 14px;">
            <h3 style="color: #0369a1; font-family: var(--font-title); font-size: 1.2rem; margin-bottom: 4px;">
              4 Cara Menemukan Makna Kata Ilmiah
            </h3>
            <p style="color: #64748b; font-size: 0.85rem;">Strategi memahami istilah teknis dalam teks LHO</p>
          </div>

          <div style="display: flex; flex-direction: column; gap: 8px;">
            <div style="background: #ffffff; border: 1px solid #e2e8f0; padding: 10px; border-radius: 8px;">
              <b style="color: #0284c7;">1. Tersurat Langsung dalam Teks:</b>
              <p style="font-size: 0.83rem; color: #475569; margin-top: 2px;">
                Makna dijelaskan langsung pada kalimat tersebut. <i>Contoh: "Jering adalah tanaman polong tropis Asia Tenggara."</i>
              </p>
            </div>
            <div style="background: #ffffff; border: 1px solid #e2e8f0; padding: 10px; border-radius: 8px;">
              <b style="color: #0284c7;">2. Tersirat dari Konteks Kalimat:</b>
              <p style="font-size: 0.83rem; color: #475569; margin-top: 2px;">
                Makna dipahami melalui fungsi kalimat pendukung. <i>Contoh: "Sifat diuretiknya memperlancar buang air kecil."</i>
              </p>
            </div>
            <div style="background: #ffffff; border: 1px solid #e2e8f0; padding: 10px; border-radius: 8px;">
              <b style="color: #0284c7;">3. Menggunakan Petunjuk Visual:</b>
              <p style="font-size: 0.83rem; color: #475569; margin-top: 2px;">
                Mengamati bagan morfologi, foto mikroskop, atau diagram taksonomi yang menyertai teks.
              </p>
            </div>
            <div style="background: #ffffff; border: 1px solid #e2e8f0; padding: 10px; border-radius: 8px;">
              <b style="color: #0284c7;">4. Rujukan Kamus (KBBI) & Ensiklopedia:</b>
              <p style="font-size: 0.83rem; color: #475569; margin-top: 2px;">
                Mencari definisi standar di KBBI Daring (Badan Bahasa) atau Tesaurus Tematis.
              </p>
            </div>
          </div>
        `
      }
    ]
  },

  // ------------------------------------------------------
  // ZONA 3: LAB KAIDAH BAHASA (BAGIAN C)
  // ------------------------------------------------------
  {
    id: 3,
    title: "Lab Kaidah Kebahasaan",
    subtitle: "Definisi vs Deskripsi, Imbuhan di- vs Preposisi, & Kaidah Kutipan",
    nodeCoord: { x: 470, y: 190 },
    subtopics: [
      {
        id: "3-1",
        title: "1. Kalimat Definisi vs Deskripsi",
        icon: "fa-scale-balanced",
        render: () => `
          <div style="margin-bottom: 14px;">
            <h3 style="color: #b45309; font-family: var(--font-title); font-size: 1.2rem; margin-bottom: 4px;">
              Kalimat Definisi vs Kalimat Deskripsi
            </h3>
            <p style="color: #64748b; font-size: 0.85rem;">Membedakan batasan arti dan penggambaran pancaindra</p>
          </div>

          <div class="comp-grid-2">
            <div class="comp-box-col col-a">
              <h4 style="color: #166534;">Kalimat Definisi</h4>
              <ul>
                <li>Memberikan batasan arti umum dan konsep ilmiah.</li>
                <li>Ditandai kata: <i>adalah, ialah, merupakan, yaitu, yakni</i>.</li>
                <li><b>Uji Balik:</b> Jika subjek dan predikat ditukar, makna kalimat tetap sama dan logis!</li>
              </ul>
            </div>
            <div class="comp-box-col col-b">
              <h4 style="color: #b45309;">Kalimat Deskripsi</h4>
              <ul>
                <li>Menggambarkan sifat khusus (warna, ukuran, bentuk, rasa).</li>
                <li>Dapat ditangkap langsung oleh pancaindra.</li>
                <li>Membantu pembaca membayangkan bentuk fisik objek secara konkret.</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "3-2",
        title: "2. Imbuhan di- vs Kata Depan di",
        icon: "fa-pen-clip",
        render: () => `
          <div style="margin-bottom: 14px;">
            <h3 style="color: #b45309; font-family: var(--font-title); font-size: 1.2rem; margin-bottom: 4px;">
              Aturan Baku: Imbuhan di- vs Kata Depan di
            </h3>
            <p style="color: #64748b; font-size: 0.85rem;">Kaidah ejaan penting agar naskah LHO berstandar ilmiah</p>
          </div>

          <div style="display: flex; flex-direction: column; gap: 10px;">
            <div style="background: #f0fdf4; border: 1.5px solid #86efac; padding: 12px; border-radius: 8px;">
              <b style="color: #166534;">1. Imbuhan (Awalan) 'di-' &rarr; DITULIS SERANGKAI (GABUNG)</b>
              <p style="font-size: 0.84rem; color: #1e293b; margin-top: 4px;">
                Membentuk <b>kata kerja pasif</b> (bisa diubah jadi aktif berawalan <i>me-</i>).<br>
                <b>Benar:</b> <i>diobservasi, diteliti, dikelompokkan, ditulis, dianalisis.</i><br>
                <span style="color: #dc2626;"><b>Salah:</b> <i>di observasi, di teliti, di tulis.</i></span>
              </p>
            </div>

            <div style="background: #fefce8; border: 1.5px solid #fde047; padding: 12px; border-radius: 8px;">
              <b style="color: #854d0e;">2. Kata Depan (Preposisi) 'di' &rarr; DITULIS TERPISAH (PISAH)</b>
              <p style="font-size: 0.84rem; color: #1e293b; margin-top: 4px;">
                Menunjukkan <b>tempat, lokasi, atau arah</b>.<br>
                <b>Benar:</b> <i>di laboratorium, di habitat asli, di alam bebas, di sekolah.</i><br>
                <span style="color: #dc2626;"><b>Salah:</b> <i>dilaboratorium, dihabitat asli.</i></span>
              </p>
            </div>
          </div>
        `
      },
      {
        id: "3-3",
        title: "3. Penulisan Kutipan Ilmiah",
        icon: "fa-quote-left",
        render: () => `
          <div style="margin-bottom: 14px;">
            <h3 style="color: #b45309; font-family: var(--font-title); font-size: 1.2rem; margin-bottom: 4px;">
              Kaidah Penulisan Kutipan
            </h3>
            <p style="color: #64748b; font-size: 0.85rem;">Menyertakan rujukan pakar demi memperkuat keakuratan data</p>
          </div>

          <div style="display: flex; flex-direction: column; gap: 10px;">
            <div style="background: #ffffff; border: 1px solid #e2e8f0; padding: 12px; border-radius: 8px;">
              <b style="color: #0284c7;">A. Kutipan Langsung:</b>
              <p style="font-size: 0.84rem; color: #334155; margin-top: 4px;">
                Menyalin kalimat asli persis kata demi kata. Wajib diapit <b>tanda petik dua ("...")</b> dan menyertakan nama pengarang, tahun, dan halaman.<br>
                <i>Contoh: Menurut Santoso (2023: 45), "Hutan bakau mampu mereduksi hempasan tsunami hingga 50 persen."</i>
              </p>
            </div>

            <div style="background: #ffffff; border: 1px solid #e2e8f0; padding: 12px; border-radius: 8px;">
              <b style="color: #166534;">B. Kutipan Tidak Langsung (Parafrasa):</b>
              <p style="font-size: 0.84rem; color: #334155; margin-top: 4px;">
                Mengambil ide pokok sumber lalu ditulis ulang menggunakan kalimat sendiri. <b>Tidak memakai tanda petik</b>, tetapi tetap mencantumkan sumber nama dan tahun.<br>
                <i>Contoh: Santoso (2023) menegaskan bahwa kelestarian bakau terbukti efektif melindungi daratan pesisir.</i>
              </p>
            </div>
          </div>
        `
      }
    ]
  },

  // ------------------------------------------------------
  // ZONA 4: PUSTAKA ALUR MENULIS (BAGIAN D)
  // ------------------------------------------------------
  {
    id: 4,
    title: "Pustaka Alur Menulis",
    subtitle: "Enam Langkah Menulis, Pola Kerangka, & Tiga Pola Paragraf",
    nodeCoord: { x: 740, y: 140 },
    subtopics: [
      {
        id: "4-1",
        title: "1. Enam Langkah Menulis Teks LHO",
        icon: "fa-list-ol",
        render: () => `
          <div style="margin-bottom: 14px;">
            <h3 style="color: #7c3aed; font-family: var(--font-title); font-size: 1.2rem; margin-bottom: 4px;">
              6 Langkah Menulis Teks LHO
            </h3>
            <p style="color: #64748b; font-size: 0.85rem;">Tahapan metodologis dari pengamatan hingga naskah utuh</p>
          </div>

          <div style="display: flex; flex-direction: column; gap: 8px;">
            <div style="display: flex; gap: 10px; align-items: center; background: #faf5ff; border: 1px solid #e9d5ff; padding: 8px 12px; border-radius: 8px;">
              <b style="background: #7c3aed; color: #fff; width: 22px; height: 22px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.75rem; flex-shrink: 0;">1</b>
              <span style="font-size: 0.84rem; color: #1e293b;"><b>Menentukan Objek:</b> Pilih objek bernilai ilmiah dan menarik.</span>
            </div>
            <div style="display: flex; gap: 10px; align-items: center; background: #faf5ff; border: 1px solid #e9d5ff; padding: 8px 12px; border-radius: 8px;">
              <b style="background: #7c3aed; color: #fff; width: 22px; height: 22px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.75rem; flex-shrink: 0;">2</b>
              <span style="font-size: 0.84rem; color: #1e293b;"><b>Menentukan Tujuan:</b> Rumuskan fokus data yang ingin digali.</span>
            </div>
            <div style="display: flex; gap: 10px; align-items: center; background: #faf5ff; border: 1px solid #e9d5ff; padding: 8px 12px; border-radius: 8px;">
              <b style="background: #7c3aed; color: #fff; width: 22px; height: 22px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.75rem; flex-shrink: 0;">3</b>
              <span style="font-size: 0.84rem; color: #1e293b;"><b>Melakukan Observasi Langsung:</b> Mengamati cermat dengan pancaindra.</span>
            </div>
            <div style="display: flex; gap: 10px; align-items: center; background: #faf5ff; border: 1px solid #e9d5ff; padding: 8px 12px; border-radius: 8px;">
              <b style="background: #7c3aed; color: #fff; width: 22px; height: 22px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.75rem; flex-shrink: 0;">4</b>
              <span style="font-size: 0.84rem; color: #1e293b;"><b>Mencatat Data Adiksimba:</b> Dokumentasikan fakta 5W+1H.</span>
            </div>
            <div style="display: flex; gap: 10px; align-items: center; background: #faf5ff; border: 1px solid #e9d5ff; padding: 8px 12px; border-radius: 8px;">
              <b style="background: #7c3aed; color: #fff; width: 22px; height: 22px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.75rem; flex-shrink: 0;">5</b>
              <span style="font-size: 0.84rem; color: #1e293b;"><b>Menyusun Kerangka:</b> Kelompokkan ke dalam 3 struktur teks.</span>
            </div>
            <div style="display: flex; gap: 10px; align-items: center; background: #faf5ff; border: 1px solid #e9d5ff; padding: 8px 12px; border-radius: 8px;">
              <b style="background: #7c3aed; color: #fff; width: 22px; height: 22px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.75rem; flex-shrink: 0;">6</b>
              <span style="font-size: 0.84rem; color: #1e293b;"><b>Mengembangkan & Menyunting:</b> Susun teks padu dan periksa ejaan baku.</span>
            </div>
          </div>
        `
      },
      {
        id: "4-2",
        title: "2. Pola Kronologis vs Spasial",
        icon: "fa-timeline",
        render: () => `
          <div style="margin-bottom: 14px;">
            <h3 style="color: #7c3aed; font-family: var(--font-title); font-size: 1.2rem; margin-bottom: 4px;">
              Pola Kerangka: Kronologis vs Spasial
            </h3>
            <p style="color: #64748b; font-size: 0.85rem;">Dua metode mengorganisasikan alur penyajian data</p>
          </div>

          <div class="comp-grid-2">
            <div class="comp-box-col col-a">
              <h4 style="color: #166534;">1. Pola Kronologis (Urutan Waktu)</h4>
              <p style="font-size: 0.82rem; margin-bottom: 6px; color: #334155;">Disusun berdasarkan <b>urutan waktu peristiwa atau tahapan fase</b>.</p>
              <ul>
                <li>Cocok untuk metamorfosis serangga atau pertumbuhan kecambah.</li>
                <li><i>Contoh: Tahap telur &rarr; ulat &rarr; kepompong &rarr; kupu-kupu.</i></li>
              </ul>
            </div>
            <div class="comp-box-col col-b">
              <h4 style="color: #7c3aed;">2. Pola Spasial (Urutan Ruang)</h4>
              <p style="font-size: 0.82rem; margin-bottom: 6px; color: #334155;">Disusun berdasarkan <b>tata letak fisik atau posisi dari ujung ke ujung</b>.</p>
              <ul>
                <li>Cocok untuk anatomi tubuh hewan atau zonasi hutan.</li>
                <li><i>Contoh: Mengamati pohon dari tajuk daun, batang tengah, hingga akar tunjang.</i></li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "4-3",
        title: "3. Tiga Jenis Paragraf",
        icon: "fa-paragraph",
        render: () => `
          <div style="margin-bottom: 14px;">
            <h3 style="color: #7c3aed; font-family: var(--font-title); font-size: 1.2rem; margin-bottom: 4px;">
              Paragraf Deduktif, Induktif, & Campuran
            </h3>
            <p style="color: #64748b; font-size: 0.85rem;">Variasi penempatan gagasan utama dalam paragraf</p>
          </div>

          <div style="display: flex; flex-direction: column; gap: 8px;">
            <div style="background: #f0fdf4; border-left: 4px solid #16a34a; padding: 10px; border-radius: 8px;">
              <b style="color: #166534;">A. Paragraf Deduktif (Gagasan Utama di AWAL)</b>
              <p style="font-size: 0.82rem; color: #334155; margin-top: 2px;">
                Diawali pernyataan umum, diikuti kalimat penjelas.<br>
                <i>Contoh: <b>"Komodo merupakan kadal terbesar di dunia."</b> Panjangnya mencapai 3 meter dengan berat hingga 70 kg...</i>
              </p>
            </div>
            <div style="background: #f0f9ff; border-left: 4px solid #0284c7; padding: 10px; border-radius: 8px;">
              <b style="color: #0369a1;">B. Paragraf Induktif (Gagasan Utama di AKHIR)</b>
              <p style="font-size: 0.82rem; color: #334155; margin-top: 2px;">
                Diawali bukti-bukti khusus, disimpulkan di akhir.<br>
                <i>Contoh: Daunnya rimbun dan akarnya kokoh menahan ombak. <b>Oleh karena itu, pohon bakau sangat krusial bagi pantai.</b></i>
              </p>
            </div>
            <div style="background: #fefce8; border-left: 4px solid #ca8a04; padding: 10px; border-radius: 8px;">
              <b style="color: #854d0e;">C. Paragraf Campuran (Gagasan di AWAL & AKHIR)</b>
              <p style="font-size: 0.82rem; color: #334155; margin-top: 2px;">
                Diawali kalimat utama, diperjelas rincian, lalu ditegaskan kembali di akhir paragraf.
              </p>
            </div>
          </div>
        `
      }
    ]
  },

  // ------------------------------------------------------
  // ZONA 5: BENGKEL BUKU TEMPEL (BAGIAN E)
  // ------------------------------------------------------
  {
    id: 5,
    title: "Bengkel Buku Tempel (Scrapbook)",
    subtitle: "Menyajikan Laporan Hasil Observasi dalam Bentuk Scrapbook Estetis",
    nodeCoord: { x: 870, y: 270 },
    subtopics: [
      {
        id: "5-1",
        title: "1. Konsep Buku Tempel (Scrapbook)",
        icon: "fa-palette",
        render: () => `
          <div style="margin-bottom: 14px;">
            <h3 style="color: #db2777; font-family: var(--font-title); font-size: 1.2rem; margin-bottom: 4px;">
              Konsep Buku Tempel (Scrapbook) LHO
            </h3>
            <p style="color: #64748b; font-size: 0.85rem;">Memadukan fakta ilmiah dengan sentuhan visual kreatif</p>
          </div>

          <p style="margin-bottom: 12px; line-height: 1.6; color: #1e293b;">
            <b>Buku tempel (*scrapbook*)</b> adalah seni menyajikan naskah teks, foto dokumentasi asli lapangan, dan hiasan visual di atas lembaran kertas tebal. Melalui scrapbook, laporan ilmiah disajikan secara artistik, menarik, dan mudah dipahami pembaca.
          </p>

          <div class="mat-concept-grid">
            <div class="mat-card">
              <h4><i class="fa-solid fa-wand-magic-sparkles" style="color: #ec4899;"></i> Estetis & Menarik</h4>
              <p>Mengurangi kejenuhan teks formal dengan tata letak warna dan foto harmonis.</p>
            </div>
            <div class="mat-card">
              <h4><i class="fa-solid fa-camera" style="color: #0284c7;"></i> Bukti Otentik</h4>
              <p>Menampilkan foto asli hasil pengamatan langsung di lapangan.</p>
            </div>
            <div class="mat-card">
              <h4><i class="fa-solid fa-diagram-project" style="color: #16a34a;"></i> Tetap Terstruktur</h4>
              <p>Tetap memuat 3 struktur baku LHO: Pernyataan Umum, Bagian, dan Manfaat.</p>
            </div>
          </div>
        `
      },
      {
        id: "5-2",
        title: "2. Alat, Bahan, & 6 Langkah Desain",
        icon: "fa-scissors",
        render: () => `
          <div style="margin-bottom: 14px;">
            <h3 style="color: #db2777; font-family: var(--font-title); font-size: 1.2rem; margin-bottom: 4px;">
              Alat, Bahan, & Langkah Pembuatan
            </h3>
            <p style="color: #64748b; font-size: 0.85rem;">Panduan merakit karya buku tempel observasi</p>
          </div>

          <div style="background: #fdf2f8; border: 1.5px solid #fbcfe8; padding: 10px 14px; border-radius: 8px; margin-bottom: 10px;">
            <b style="color: #9d174d;">Alat & Bahan:</b> Kertas karton tebal/buffalo, gunting, lem/double-tape, foto observasi asli, spidol warna, selotip hias (<i>washi tape</i>), dan penggaris.
          </div>

          <div style="display: flex; flex-direction: column; gap: 6px;">
            <div style="background: #ffffff; border: 1px solid #e2e8f0; padding: 8px 12px; border-radius: 6px; font-size: 0.83rem;">
              <b>1. Tentukan Tema:</b> Pilih objek pengamatan yang spesifik dan menarik.
            </div>
            <div style="background: #ffffff; border: 1px solid #e2e8f0; padding: 8px 12px; border-radius: 6px; font-size: 0.83rem;">
              <b>2. Susun Draf Teks LHO:</b> Siapkan teks sesuai 3 struktur utama.
            </div>
            <div style="background: #ffffff; border: 1px solid #e2e8f0; padding: 8px 12px; border-radius: 6px; font-size: 0.83rem;">
              <b>3. Cetak Foto Lapangan:</b> Siapkan bukti visual observasi dengan ukuran proporsional.
            </div>
            <div style="background: #ffffff; border: 1px solid #e2e8f0; padding: 8px 12px; border-radius: 6px; font-size: 0.83rem;">
              <b>4. Rancang Tata Letak (*Layout*):</b> Seimbangkan posisi teks dan foto sebelum dilem.
            </div>
            <div style="background: #ffffff; border: 1px solid #e2e8f0; padding: 8px 12px; border-radius: 6px; font-size: 0.83rem;">
              <b>5. Rekatkan & Beri Hiasan:</b> Tempel rapi, beri keterangan gambar (*caption*), dan ornamen.
            </div>
            <div style="background: #ffffff; border: 1px solid #e2e8f0; padding: 8px 12px; border-radius: 6px; font-size: 0.83rem;">
              <b>6. Jilid & Publikasikan:</b> Beri sampul menarik untuk dipamerkan di kelas atau mading sekolah.
            </div>
          </div>
        `
      }
    ]
  },

  // ------------------------------------------------------
  // ZONA 6: MIMBAR PRESENTASI VOKAL (BAGIAN F)
  // ------------------------------------------------------
  {
    id: 6,
    title: "Mimbar Orasi & Presentasi",
    subtitle: "Teknik Presentasi Ilmiah, Pengaturan Intonasi (Nada, Jeda, Tempo), & Tanya Jawab",
    nodeCoord: { x: 710, y: 480 },
    subtopics: [
      {
        id: "6-1",
        title: "1. Kesiapan Mental & Sikap Penyaji",
        icon: "fa-user-tie",
        render: () => `
          <div style="margin-bottom: 14px;">
            <h3 style="color: #0f766e; font-family: var(--font-title); font-size: 1.2rem; margin-bottom: 4px;">
              Kesiapan Mental & Sikap Penyaji
            </h3>
            <p style="color: #64748b; font-size: 0.85rem;">Fondasi kepercayaan diri saat mempresentasikan laporan ilmiah</p>
          </div>

          <div class="mat-concept-grid">
            <div class="mat-card">
              <h4><i class="fa-solid fa-brain" style="color: #0d9488;"></i> Kuasai Data Fakta</h4>
              <p>Pahami alur laporan dari definisi hingga manfaat. Jangan menghafal kata per kata, kuasai intinya.</p>
            </div>
            <div class="mat-card">
              <h4><i class="fa-solid fa-eye" style="color: #0284c7;"></i> Kontak Mata Aktif</h4>
              <p>Sapukan pandangan ke seluruh audiens di ruangan untuk membangun keterhubungan yang meyakinkan.</p>
            </div>
            <div class="mat-card">
              <h4><i class="fa-solid fa-person" style="color: #d97706;"></i> Bahasa Tubuh Tegak</h4>
              <p>Berdiri tegak, rileks, dan gunakan gestur tangan yang wajar untuk mempertegas pesan penting.</p>
            </div>
          </div>
        `
      },
      {
        id: "6-2",
        title: "2. Pengaturan Intonasi (Nada, Jeda, Tempo)",
        icon: "fa-microphone-lines",
        render: () => `
          <div style="margin-bottom: 14px;">
            <h3 style="color: #0f766e; font-family: var(--font-title); font-size: 1.2rem; margin-bottom: 4px;">
              Pengaturan Intonasi Vokal
            </h3>
            <p style="color: #64748b; font-size: 0.85rem;">Tekan tombol demo audio di bawah untuk mencoba nada suara!</p>
          </div>

          <div style="display: flex; flex-direction: column; gap: 8px; margin-bottom: 14px;">
            <div style="background: #ffffff; border: 1px solid #e2e8f0; padding: 10px; border-radius: 8px;">
              <b style="color: #0f766e;">A. NADA (Tinggi-Rendah Suara):</b> Beri penekanan tinggi pada kata kunci ilmiah penting.
            </div>
            <div style="background: #ffffff; border: 1px solid #e2e8f0; padding: 10px; border-radius: 8px;">
              <b style="color: #0f766e;">B. JEDA (Pemberhentian Sesaat):</b> Berhenti sejenak di tanda baca agar audiens mencerna data.
            </div>
            <div style="background: #ffffff; border: 1px solid #e2e8f0; padding: 10px; border-radius: 8px;">
              <b style="color: #0f766e;">C. TEMPO (Kecepatan Berbicara):</b> Jangan terburu-buru, variasikan kecepatan secara dinamis.
            </div>
          </div>

          <span style="font-family: var(--font-title); font-size: 0.82rem; font-weight: 700; color: #1e293b;">
            🔊 Simulator Nada Vokal (Web Audio API Synthesizer):
          </span>
          <div class="audio-demo-row">
            <div class="audio-demo-btn" onclick="playIntonationTone('greet')">
              <i class="fa-solid fa-volume-high"></i>
              <h5>1. Nada Sambutan</h5>
              <p style="font-size: 0.72rem; color: #64748b;">Ramah & ceria</p>
            </div>
            <div class="audio-demo-btn" onclick="playIntonationTone('data')">
              <i class="fa-solid fa-chart-line"></i>
              <h5>2. Nada Data Ilmiah</h5>
              <p style="font-size: 0.72rem; color: #64748b;">Fokus & mantap</p>
            </div>
            <div class="audio-demo-btn" onclick="playIntonationTone('close')">
              <i class="fa-solid fa-award"></i>
              <h5>3. Nada Penutup</h5>
              <p style="font-size: 0.72rem; color: #64748b;">Tegas & hangat</p>
            </div>
          </div>
        `
      },
      {
        id: "6-3",
        title: "3. Etika Sesi Tanya Jawab",
        icon: "fa-comments",
        render: () => `
          <div style="margin-bottom: 14px;">
            <h3 style="color: #0f766e; font-family: var(--font-title); font-size: 1.2rem; margin-bottom: 4px;">
              Etika Sesi Tanya Jawab Ilmiah
            </h3>
            <p style="color: #64748b; font-size: 0.85rem;">Menjaga objektivitas ilmiah dan kerendahan hati peneliti</p>
          </div>

          <div style="display: flex; flex-direction: column; gap: 8px;">
            <div style="background: #f0fdfa; border: 1px solid #99f6e4; padding: 10px; border-radius: 8px;">
              <b style="color: #0f766e;">1. Dengarkan dengan Seksama:</b> Jangan memotong penanya sebelum selesai bicara.
            </div>
            <div style="background: #f0fdfa; border: 1px solid #99f6e4; padding: 10px; border-radius: 8px;">
              <b style="color: #0f766e;">2. Jawab Berdasarkan Fakta:</b> Rujuk data observasi nyata; jika belum diteliti, akui dengan jujur.
            </div>
            <div style="background: #f0fdfa; border: 1px solid #99f6e4; padding: 10px; border-radius: 8px;">
              <b style="color: #0f766e;">3. Ucapkan Terima Kasih:</b> Hargai kritik dan masukan untuk penyempurnaan laporan.
            </div>
          </div>
        `
      }
    ]
  }
];

// Target Kata untuk Game Cari Kata LHO (Word Search Puzzle)
const WORD_SEARCH_TARGETS = [
  "OBJEKTIF",
  "DEFINISI",
  "DESKRIPSI",
  "ADIKSIMBA",
  "MANFAAT",
  "FAKTUAL",
  "SISTEMATIS"
];

// ========================================================
// 2. STATE GAME ENGINE
// ========================================================
const GAME_STORAGE_KEY = "LHO_QUEST_HYBRID_ADVENTURE_V1";

let gameState = {
  playerName: "Peneliti Muda",
  playerClass: "X A",
  avatarKey: "satria",
  avatarEmoji: "assets/satria_3d.jpg",
  avatarTitle: "Peneliti Muda",
  currentScreen: "screen-welcome",
  visitedZones: [], // [1, 2, 3, 4, 5, 6]
  currentMissionId: 1,
  currentSubtopicIndex: 0,
  isMuted: false,
  // Word Search state
  wordSearch: {
    timerSeconds: 180,
    timerInterval: null,
    hearts: 5,
    foundWords: [],
    selectedIndices: [],
    gridLetters: [],
    isDragging: false
  }
};

// ========================================================
// 3. WEB AUDIO SYNTHESIZER (ZERO ASSET DEPENDENCY)
// ========================================================
const audioCtx = (typeof window !== "undefined" && (window.AudioContext || window.webkitAudioContext))
  ? new (window.AudioContext || window.webkitAudioContext)()
  : null;

function playAudioEffect(type) {
  if (gameState.isMuted || !audioCtx) return;
  try {
    if (audioCtx.state === 'suspended') audioCtx.resume();

    if (type === 'click') {
      const o = audioCtx.createOscillator();
      const g = audioCtx.createGain();
      o.connect(g);
      g.connect(audioCtx.destination);
      o.type = 'sine';
      o.frequency.setValueAtTime(480, audioCtx.currentTime);
      g.gain.setValueAtTime(0.08, audioCtx.currentTime);
      g.gain.linearRampToValueAtTime(0.001, audioCtx.currentTime + 0.05);
      o.start();
      o.stop(audioCtx.currentTime + 0.05);
    } else if (type === 'jump') {
      // Cheerful cartoon hop sound
      const o = audioCtx.createOscillator();
      const g = audioCtx.createGain();
      o.connect(g);
      g.connect(audioCtx.destination);
      o.type = 'sine';
      o.frequency.setValueAtTime(260, audioCtx.currentTime);
      o.frequency.exponentialRampToValueAtTime(620, audioCtx.currentTime + 0.18);
      g.gain.setValueAtTime(0.12, audioCtx.currentTime);
      g.gain.linearRampToValueAtTime(0.001, audioCtx.currentTime + 0.2);
      o.start();
      o.stop(audioCtx.currentTime + 0.2);
    } else if (type === 'levelUp') {
      // Fanfare star award
      [440, 554.37, 659.25, 880].forEach((freq, idx) => {
        const o = audioCtx.createOscillator();
        const g = audioCtx.createGain();
        o.connect(g);
        g.connect(audioCtx.destination);
        o.type = 'triangle';
        o.frequency.value = freq;
        g.gain.setValueAtTime(0.1, audioCtx.currentTime + idx * 0.08);
        g.gain.linearRampToValueAtTime(0.001, audioCtx.currentTime + idx * 0.08 + 0.25);
        o.start(audioCtx.currentTime + idx * 0.08);
        o.stop(audioCtx.currentTime + idx * 0.08 + 0.25);
      });
    } else if (type === 'correct') {
      [523.25, 659.25, 783.99].forEach((f, i) => {
        const o = audioCtx.createOscillator();
        const g = audioCtx.createGain();
        o.connect(g);
        g.connect(audioCtx.destination);
        o.type = 'sine';
        o.frequency.value = f;
        g.gain.setValueAtTime(0.1, audioCtx.currentTime + i * 0.07);
        g.gain.linearRampToValueAtTime(0.001, audioCtx.currentTime + i * 0.07 + 0.2);
        o.start(audioCtx.currentTime + i * 0.07);
        o.stop(audioCtx.currentTime + i * 0.07 + 0.2);
      });
    } else if (type === 'wrong') {
      const o = audioCtx.createOscillator();
      const g = audioCtx.createGain();
      o.connect(g);
      g.connect(audioCtx.destination);
      o.type = 'sawtooth';
      o.frequency.setValueAtTime(180, audioCtx.currentTime);
      o.frequency.linearRampToValueAtTime(110, audioCtx.currentTime + 0.2);
      g.gain.setValueAtTime(0.1, audioCtx.currentTime);
      g.gain.linearRampToValueAtTime(0.001, audioCtx.currentTime + 0.25);
      o.start();
      o.stop(audioCtx.currentTime + 0.25);
    } else if (type === 'victory') {
      [523.25, 659.25, 783.99, 1046.50, 1318.5].forEach((freq, i) => {
        const o = audioCtx.createOscillator();
        const g = audioCtx.createGain();
        o.connect(g);
        g.connect(audioCtx.destination);
        o.type = 'triangle';
        o.frequency.value = freq;
        g.gain.setValueAtTime(0.14, audioCtx.currentTime + i * 0.1);
        g.gain.linearRampToValueAtTime(0.001, audioCtx.currentTime + i * 0.1 + 0.35);
        o.start(audioCtx.currentTime + i * 0.1);
        o.stop(audioCtx.currentTime + i * 0.1 + 0.35);
      });
    }
  } catch (e) {
    console.warn("Audio error:", e);
  }
}

function toggleMute() {
  gameState.isMuted = !gameState.isMuted;
  const btn = document.getElementById('mute-btn');
  if (btn) {
    btn.innerHTML = gameState.isMuted 
      ? '<i class="fa-solid fa-volume-xmark" style="color:#ef4444;"></i>' 
      : '<i class="fa-solid fa-volume-high"></i>';
  }
}

// Simulasi nada bicara (Intonation audio synthesizer demo for Zone 6)
function playIntonationTone(style) {
  if (gameState.isMuted || !audioCtx) return;
  try {
    if (audioCtx.state === 'suspended') audioCtx.resume();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);

    if (style === 'greet') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, audioCtx.currentTime); // D5
      osc.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.3); // A5
      gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
      gain.gain.linearRampToValueAtTime(0.001, audioCtx.currentTime + 0.4);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.4);
    } else if (style === 'data') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(329.63, audioCtx.currentTime); // E4
      gain.gain.setValueAtTime(0.12, audioCtx.currentTime);
      gain.gain.linearRampToValueAtTime(0.001, audioCtx.currentTime + 0.5);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.5);
    } else if (style === 'close') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(523.25, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(392, audioCtx.currentTime + 0.35);
      gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
      gain.gain.linearRampToValueAtTime(0.001, audioCtx.currentTime + 0.45);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.45);
    }
  } catch (e) {
    console.warn("Intonation sound:", e);
  }
}

// ========================================================
// 4. SCREEN SWITCHER & MODAL SYSTEM
// ========================================================
function goToScreen(screenId) {
  playAudioEffect('click');
  document.querySelectorAll('.game-screen').forEach(scr => {
    scr.classList.remove('active');
  });

  const target = document.getElementById(screenId);
  if (target) {
    target.classList.add('active');
    gameState.currentScreen = screenId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // If entering word search, start timer
  if (screenId === 'screen-wordsearch') {
    initWordSearchGame();
  } else {
    stopWordSearchTimer();
  }

  // Update map pin position if entering map
  if (screenId === 'screen-map') {
    updateMapPinPosition(gameState.currentMissionId);
  }
}

function startFromWelcome() {
  playAudioEffect('jump');
  // Check if player has entered name
  if (!gameState.playerName || gameState.playerName === "Peneliti Muda") {
    openPlayerSetupModal();
  } else {
    goToScreen('screen-hub');
  }
}

function openModal(modalId) {
  playAudioEffect('click');
  const m = document.getElementById(modalId);
  if (m) m.classList.remove('hidden');
}

function closeModal(modalId) {
  playAudioEffect('click');
  const m = document.getElementById(modalId);
  if (m) m.classList.add('hidden');
}

// ========================================================
// 5. GAME MAP: INTERACTIVE OVERWORLD PATHWAY (PROGRESSION SEQUENTIAL)
// ========================================================
function isZoneUnlocked(zoneId) {
  if (zoneId === 1) return true;
  return gameState.visitedZones.includes(zoneId - 1);
}

let lockToastTimer = null;
function showLockedMissionToast(zoneId) {
  const toast = document.getElementById('map-lock-toast');
  const toastText = document.getElementById('map-lock-toast-text');
  const prevZone = zoneId - 1;

  if (toast && toastText) {
    toastText.innerHTML = `🔒 <b>MISI ${zoneId} TERKUNCI!</b> Selesaikan Misi ${prevZone} terlebih dahulu untuk membuka jalur ini.`;
    toast.classList.remove('hidden');

    if (lockToastTimer) clearTimeout(lockToastTimer);
    lockToastTimer = setTimeout(() => {
      toast.classList.add('hidden');
    }, 3200);
  }
}

function selectMissionNode(zoneId) {
  // Validasi: Cek apakah misi sebelumnya sudah diselesaikan
  if (!isZoneUnlocked(zoneId)) {
    playAudioEffect('wrong');
    const nodeEl = document.getElementById(`node-zone-${zoneId}`);
    if (nodeEl) {
      nodeEl.classList.remove('shake-locked');
      void nodeEl.offsetWidth; // Trigger reflow for CSS animation
      nodeEl.classList.add('shake-locked');
    }
    showLockedMissionToast(zoneId);
    return;
  }

  playAudioEffect('jump');
  gameState.currentMissionId = zoneId;
  updateMapPinPosition(zoneId);

  // Smooth delay before modal pops up for immersion
  setTimeout(() => {
    openMissionMaterialModal(zoneId);
  }, 450);
}

function updateMapPinPosition(zoneId) {
  const zone = GAME_ZONES_DATA.find(z => z.id === zoneId);
  const pin = document.getElementById('map-player-pin');
  if (zone && pin) {
    pin.style.left = `${zone.nodeCoord.x}px`;
    pin.style.top = `${zone.nodeCoord.y - 45}px`;
  }
}

function checkAllZonesFinished() {
  if (gameState.visitedZones.length === 6) {
    showCertificateModal();
  } else {
    playAudioEffect('click');
    alert(`Kamu telah menyelesaikan ${gameState.visitedZones.length} dari 6 zona! Selesaikan seluruh zona misi secara berurutan untuk membuka piala kelulusan dan mengklaim sertifikat.`);
  }
}

// ========================================================
// 6. LEMBAR MATERI INTERAKTIF (MODAL 4)
// ========================================================
function openMissionMaterialModal(zoneId) {
  const zone = GAME_ZONES_DATA.find(z => z.id === zoneId);
  if (!zone) return;

  gameState.currentMissionId = zoneId;
  gameState.currentSubtopicIndex = 0;

  // Inisialisasi pelacakan subtopik yang telah dibuka
  if (!gameState.openedSubtopics) gameState.openedSubtopics = {};
  if (!gameState.openedSubtopics[zoneId]) gameState.openedSubtopics[zoneId] = [];
  if (!gameState.openedSubtopics[zoneId].includes(0)) gameState.openedSubtopics[zoneId].push(0);

  // Header info
  document.getElementById('mat-flag-tag').textContent = `MISI ${zone.id}`;
  document.getElementById('mat-mission-title').textContent = `${zone.id}. ${zone.title}`;
  document.getElementById('mat-mission-subtitle').textContent = zone.subtitle;

  // Star status
  const isDone = gameState.visitedZones.includes(zone.id);
  const starStatus = document.getElementById('mat-star-status');
  if (isDone) {
    starStatus.innerHTML = '<i class="fa-solid fa-star text-gold"></i> Selesai Dipelajari';
    starStatus.style.background = '#dcfce7';
    starStatus.style.borderColor = '#86efac';
    starStatus.style.color = '#166534';
  } else {
    starStatus.innerHTML = '<i class="fa-regular fa-star"></i> Misi Sedang Berlangsung';
    starStatus.style.background = '#fef3c7';
    starStatus.style.borderColor = '#fde047';
    starStatus.style.color = '#b45309';
  }

  // Render Subtopics Navigation Pills
  renderSubtopicsNavigationPills();
  renderSubtopicContent();
  openModal('modal-mission-material');
}

function renderSubtopicsNavigationPills() {
  const zone = GAME_ZONES_DATA.find(z => z.id === gameState.currentMissionId);
  if (!zone) return;

  const navBar = document.getElementById('mat-subtopics-nav');
  if (!navBar) return;
  navBar.innerHTML = '';
  const readList = (gameState.openedSubtopics && gameState.openedSubtopics[zone.id]) || [];

  zone.subtopics.forEach((sub, idx) => {
    const btn = document.createElement('button');
    const isRead = readList.includes(idx);
    const isActive = (idx === gameState.currentSubtopicIndex);
    btn.className = `subtopic-pill-btn ${isActive ? 'active' : ''}`;
    btn.id = `subtopic-pill-${idx}`;
    btn.innerHTML = `<i class="fa-solid ${isRead ? 'fa-check text-emerald' : sub.icon}"></i> ${sub.title}`;
    btn.onclick = () => switchSubtopic(idx);
    navBar.appendChild(btn);
  });
}

function switchSubtopic(index) {
  playAudioEffect('click');
  gameState.currentSubtopicIndex = index;
  const zoneId = gameState.currentMissionId;

  if (!gameState.openedSubtopics) gameState.openedSubtopics = {};
  if (!gameState.openedSubtopics[zoneId]) gameState.openedSubtopics[zoneId] = [];
  if (!gameState.openedSubtopics[zoneId].includes(index)) {
    gameState.openedSubtopics[zoneId].push(index);
    saveGameProgress();
  }

  renderSubtopicContent();
}

function prevSubtopic() {
  if (gameState.currentSubtopicIndex > 0) {
    switchSubtopic(gameState.currentSubtopicIndex - 1);
  }
}

function nextSubtopic() {
  const zone = GAME_ZONES_DATA.find(z => z.id === gameState.currentMissionId);
  if (zone && gameState.currentSubtopicIndex < zone.subtopics.length - 1) {
    switchSubtopic(gameState.currentSubtopicIndex + 1);
  }
}

function renderSubtopicContent() {
  const zone = GAME_ZONES_DATA.find(z => z.id === gameState.currentMissionId);
  if (!zone) return;

  const currentSub = zone.subtopics[gameState.currentSubtopicIndex];
  const container = document.getElementById('mat-content-body');
  if (container && currentSub) {
    container.innerHTML = currentSub.render();
    container.scrollTop = 0;
  }

  renderSubtopicsNavigationPills();

  // Update pagination indicator & button states
  const total = zone.subtopics.length;
  document.getElementById('mat-subtopic-indicator').textContent = `${gameState.currentSubtopicIndex + 1} / ${total}`;
  document.getElementById('btn-subtopic-prev').disabled = (gameState.currentSubtopicIndex === 0);
  document.getElementById('btn-subtopic-next').disabled = (gameState.currentSubtopicIndex === total - 1);

  // Update Mark Completed button state
  const readCount = (gameState.openedSubtopics && gameState.openedSubtopics[zone.id]) ? gameState.openedSubtopics[zone.id].length : 0;
  const allRead = (readCount >= total);
  const isDone = gameState.visitedZones.includes(zone.id);
  const markBtn = document.getElementById('btn-mark-completed');

  if (markBtn) {
    if (isDone) {
      markBtn.className = 'btn-mark-completed';
      markBtn.style.background = '#dcfce7';
      markBtn.style.color = '#15803d';
      markBtn.style.border = '2px solid #86efac';
      markBtn.innerHTML = `<i class="fa-solid fa-circle-check" style="color: #16a34a;"></i> MISI INI TELAH TUNTAS DIPELAJARI ★`;
    } else if (allRead) {
      markBtn.className = 'btn-mark-completed btn-pulse-ready';
      markBtn.style.background = '';
      markBtn.style.color = '';
      markBtn.style.border = '';
      markBtn.innerHTML = `<i class="fa-solid fa-flag-checkered"></i> SELESAIKAN MISI ${zone.id} & BUKA MISI ${zone.id < 6 ? zone.id + 1 : '🏆 (SERTIFIKAT)'} 🔓`;
    } else {
      markBtn.className = 'btn-mark-completed btn-reading-progress';
      markBtn.style.background = '';
      markBtn.style.color = '';
      markBtn.style.border = '';
      markBtn.innerHTML = `<i class="fa-solid fa-book-open"></i> Buka Semua Materi (${readCount}/${total}) untuk Membuka Misi ${zone.id < 6 ? zone.id + 1 : '🏆'}`;
    }
  }
}

function completeCurrentMission() {
  const zoneId = gameState.currentMissionId;
  const zone = GAME_ZONES_DATA.find(z => z.id === zoneId);
  const total = zone ? zone.subtopics.length : 1;
  const readCount = (gameState.openedSubtopics && gameState.openedSubtopics[zoneId]) ? gameState.openedSubtopics[zoneId].length : 0;

  // Syarat: Siswa harus membaca seluruh materi subtopik terlebih dahulu
  if (readCount < total && !gameState.visitedZones.includes(zoneId)) {
    playAudioEffect('wrong');
    alert(`📖 Harap buka dan pelajari seluruh materi (${readCount}/${total} subtopik) di Misi ${zoneId} ini terlebih dahulu sebelum membuka misi selanjutnya! Gunakan tombol 'Selanjutnya' untuk menelusuri materi.`);
    return;
  }

  if (!gameState.visitedZones.includes(zoneId)) {
    gameState.visitedZones.push(zoneId);
    saveGameProgress();
    updateHUDStats();
    playAudioEffect('levelUp');

    if (typeof confetti === 'function') {
      confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
    }

    // Sinkronisasi capaian zona ke Google Cloud & Rekap Guru
    syncStudentPresenceToCloud('SELESAI_ZONA', `Tuntas mempelajari Misi ${zoneId} (${zone ? zone.title : ''})`);

    // If finished all 6 zones, celebrate!
    if (gameState.visitedZones.length === 6) {
      setTimeout(() => {
        closeModal('modal-mission-material');
        showCertificateModal();
      }, 1000);
      return;
    }

    // Notifikasi misi berikutnya terbuka
    const nextZone = zoneId + 1;
    const nextZoneData = GAME_ZONES_DATA.find(z => z.id === nextZone);
    setTimeout(() => {
      alert(`🎉 HEBAT SEKALI!\n\nKamu telah menyelesaikan seluruh materi Misi ${zoneId}!\n\n🔓 Jalur MISI ${nextZone} (${nextZoneData ? nextZoneData.title : ''}) sekarang telah TERBUKA di Peta Petualangan!`);
      closeModal('modal-mission-material');
      updateMapPinPosition(nextZone);
    }, 400);
  } else {
    closeModal('modal-mission-material');
  }
}

// Interactive Structure Highlighter for Zone 1
function highlightStructure(part) {
  playAudioEffect('click');
  document.querySelectorAll('.btn-highlighter').forEach(b => b.classList.remove('active'));

  const pGen = document.getElementById('para-general');
  const pPart = document.getElementById('para-part');
  const pBen = document.getElementById('para-benefit');
  if (!pGen || !pPart || !pBen) return;

  if (part === 'all') {
    document.querySelector('.btn-hl-all')?.classList.add('active');
    pGen.style.opacity = '1'; pPart.style.opacity = '1'; pBen.style.opacity = '1';
  } else if (part === 'gen') {
    document.querySelector('.btn-hl-gen')?.classList.add('active');
    pGen.style.opacity = '1'; pPart.style.opacity = '0.25'; pBen.style.opacity = '0.25';
  } else if (part === 'part') {
    document.querySelector('.btn-hl-part')?.classList.add('active');
    pGen.style.opacity = '0.25'; pPart.style.opacity = '1'; pBen.style.opacity = '0.25';
  } else if (part === 'ben') {
    document.querySelector('.btn-hl-ben')?.classList.add('active');
    pGen.style.opacity = '0.25'; pPart.style.opacity = '0.25'; pBen.style.opacity = '1';
  }
}

// ========================================================
// 7. MINI GAME: CARI KATA LHO (WORD SEARCH PUZZLE - PERSIS VIDEO 2)
// ========================================================
const WS_GRID_SIZE = 9;

// Static pre-placed word search layout for 100% bug-free instant play
const PRESET_WORD_SEARCH = {
  // 9x9 Grid layout
  grid: [
    ['O', 'B', 'J', 'E', 'K', 'T', 'I', 'F', 'S'],
    ['D', 'E', 'F', 'I', 'N', 'I', 'S', 'I', 'I'],
    ['D', 'E', 'S', 'K', 'R', 'I', 'P', 'S', 'S'],
    ['A', 'D', 'I', 'K', 'S', 'I', 'M', 'B', 'T'],
    ['F', 'A', 'K', 'T', 'U', 'A', 'L', 'A', 'E'],
    ['M', 'A', 'N', 'F', 'A', 'A', 'T', 'K', 'M'],
    ['B', 'A', 'H', 'A', 'S', 'A', 'G', 'U', 'A'],
    ['O', 'B', 'S', 'E', 'R', 'V', 'A', 'S', 'T'],
    ['S', 'I', 'S', 'T', 'E', 'M', 'A', 'T', 'I']
  ],
  words: {
    "OBJEKTIF": [0, 1, 2, 3, 4, 5, 6, 7], // Row 0
    "DEFINISI": [9, 10, 11, 12, 13, 14, 15, 16], // Row 1
    "DESKRIPSI": [18, 19, 20, 21, 22, 23, 24, 25, 26], // Row 2 (horizontal)
    "ADIKSIMBA": [27, 28, 29, 30, 31, 32, 33, 34], // Row 3
    "FAKTUAL": [36, 37, 38, 39, 40, 41, 42], // Row 4
    "MANFAAT": [45, 46, 47, 48, 49, 50, 51], // Row 5
    "SISTEMATIS": [72, 73, 74, 75, 76, 77, 78, 79, 80] // Row 8
  }
};

function initWordSearchGame() {
  gameState.wordSearch.timerSeconds = 180;
  gameState.wordSearch.hearts = 5;
  gameState.wordSearch.foundWords = [];
  gameState.wordSearch.selectedIndices = [];

  updateWordSearchStats();
  renderWordSearchGrid();

  // Reset target checklist
  document.querySelectorAll('#ws-word-checklist li').forEach(li => {
    li.classList.remove('found');
    const cb = li.querySelector('.check-box');
    if (cb) cb.textContent = '⬜';
  });

  startWordSearchTimer();
}

function startWordSearchTimer() {
  stopWordSearchTimer();
  gameState.wordSearch.timerInterval = setInterval(() => {
    if (gameState.wordSearch.timerSeconds > 0) {
      gameState.wordSearch.timerSeconds--;
      updateWordSearchStats();
    } else {
      stopWordSearchTimer();
      playAudioEffect('wrong');
      alert("Waktu habis! Silakan ketuk 'Acak Ulang Papan' untuk mencoba kembali.");
    }
  }, 1000);
}

function stopWordSearchTimer() {
  if (gameState.wordSearch.timerInterval) {
    clearInterval(gameState.wordSearch.timerInterval);
    gameState.wordSearch.timerInterval = null;
  }
}

function updateWordSearchStats() {
  const m = Math.floor(gameState.wordSearch.timerSeconds / 60);
  const s = gameState.wordSearch.timerSeconds % 60;
  const timeStr = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  
  const timerEl = document.getElementById('ws-timer-text');
  if (timerEl) timerEl.textContent = timeStr;

  const heartsEl = document.getElementById('ws-hearts-display');
  if (heartsEl) {
    let heartsStr = "";
    for (let i = 0; i < gameState.wordSearch.hearts; i++) heartsStr += "❤️";
    for (let i = gameState.wordSearch.hearts; i < 5; i++) heartsStr += "🖤";
    heartsEl.textContent = heartsStr;
  }

  const foundCountEl = document.getElementById('ws-found-count');
  if (foundCountEl) foundCountEl.textContent = gameState.wordSearch.foundWords.length;

  const fillEl = document.getElementById('ws-progress-fill');
  if (fillEl) {
    const pct = Math.round((gameState.wordSearch.foundWords.length / 7) * 100);
    fillEl.style.width = `${pct}%`;
  }
}

function renderWordSearchGrid() {
  const gridEl = document.getElementById('wordsearch-grid');
  if (!gridEl) return;
  gridEl.innerHTML = '';

  let cellIndex = 0;
  for (let r = 0; r < WS_GRID_SIZE; r++) {
    for (let c = 0; c < WS_GRID_SIZE; c++) {
      const idx = cellIndex;
      const letter = PRESET_WORD_SEARCH.grid[r][c];

      const cell = document.createElement('div');
      cell.className = 'ws-cell';
      cell.dataset.index = idx;
      cell.dataset.row = r;
      cell.dataset.col = c;
      cell.textContent = letter;

      cell.onclick = () => handleCellClick(idx);
      gridEl.appendChild(cell);

      cellIndex++;
    }
  }
}

function handleCellClick(index) {
  playAudioEffect('click');
  const sel = gameState.wordSearch.selectedIndices;
  const pos = sel.indexOf(index);

  if (pos !== -1) {
    // Deselect if clicked again
    sel.splice(pos, 1);
  } else {
    sel.push(index);
  }

  // Update visual selection
  document.querySelectorAll('.ws-cell').forEach((c, i) => {
    c.classList.toggle('selected', sel.includes(i));
  });

  // Check if current selection matches any target word
  checkWordSearchMatch();
}

function checkWordSearchMatch() {
  const sel = gameState.wordSearch.selectedIndices;
  if (sel.length < 5) return; // All target words are 6+ letters

  const sortedSel = [...sel].sort((a, b) => a - b);

  for (let word of WORD_SEARCH_TARGETS) {
    if (gameState.wordSearch.foundWords.includes(word)) continue;

    const targetIndices = PRESET_WORD_SEARCH.words[word];
    if (targetIndices && arraysEqual(sortedSel, targetIndices)) {
      // MATCH FOUND!
      playAudioEffect('correct');
      const wordIdx = gameState.wordSearch.foundWords.length;
      gameState.wordSearch.foundWords.push(word);

      // Apply permanent colored highlight
      targetIndices.forEach(idx => {
        const cell = document.querySelector(`.ws-cell[data-index="${idx}"]`);
        if (cell) {
          cell.classList.remove('selected');
          cell.classList.add(`found-word-${wordIdx % 7}`);
        }
      });

      // Update checklist
      const item = document.querySelector(`#ws-word-checklist li[data-word="${word}"]`);
      if (item) {
        item.classList.add('found');
        const cb = item.querySelector('.check-box');
        if (cb) cb.textContent = '✅';
      }

      gameState.wordSearch.selectedIndices = [];
      updateWordSearchStats();

      // Check all found
      if (gameState.wordSearch.foundWords.length === 7) {
        stopWordSearchTimer();
        playAudioEffect('victory');
        if (typeof confetti === 'function') {
          confetti({ particleCount: 150, spread: 90, origin: { y: 0.6 } });
        }
        // Sinkronisasi status cari kata ke Google Cloud & Rekap Guru
        syncStudentPresenceToCloud('WORD_SEARCH_COMPLETE', 'Selesai menemukan 7 kata ilmiah LHO');
        setTimeout(() => {
          alert("🎉 HEBAT SEKALI! Kamu berhasil menemukan seluruh 7 kata ilmiah Teks LHO!");
        }, 500);
      }
      return;
    }
  }
}

function arraysEqual(a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

// ========================================================
// 8. JURNAL OBSERVASI (CODEX PENELITI)
// ========================================================
function openCodexModal() {
  playAudioEffect('click');
  const modal = document.getElementById('codex-modal');
  modal.classList.remove('hidden');

  const tabsBar = document.getElementById('codex-zone-tabs');
  tabsBar.innerHTML = '';

  // Tab Utama: SEMUA MATERI LENGKAP (ZONA 1 - 6)
  const allBtn = document.createElement('button');
  allBtn.className = 'codex-tab-btn active';
  allBtn.id = 'codex-tab-all';
  allBtn.innerHTML = '<i class="fa-solid fa-book-open"></i> 📚 Semua Materi (Zona 1–6 Lengkap)';
  allBtn.onclick = () => renderCodexZone('all');
  tabsBar.appendChild(allBtn);

  // Tab Masing-Masing Zona
  GAME_ZONES_DATA.forEach((zone) => {
    const isDone = gameState.visitedZones.includes(zone.id);
    const btn = document.createElement('button');
    btn.className = 'codex-tab-btn';
    btn.id = `codex-tab-${zone.id}`;
    btn.innerHTML = `${isDone ? '⭐ ' : ''}Zona ${zone.id}: ${zone.title}`;
    btn.onclick = () => renderCodexZone(zone.id);
    tabsBar.appendChild(btn);
  });

  renderCodexZone('all');
}

function closeCodexModal() {
  playAudioEffect('click');
  document.getElementById('codex-modal').classList.add('hidden');
}

function renderCodexZone(zoneId) {
  playAudioEffect('click');
  document.querySelectorAll('.codex-tab-btn').forEach(b => b.classList.remove('active'));
  const activeBtn = document.getElementById(`codex-tab-${zoneId}`);
  if (activeBtn) activeBtn.classList.add('active');

  const container = document.getElementById('codex-content-body');
  if (!container) return;

  if (zoneId === 'all') {
    let html = `
      <div style="background: linear-gradient(180deg, #dcfce7 0%, #bbf7d0 100%); border: 2px solid #86efac; border-radius: 14px; padding: 16px 20px; margin-bottom: 20px; text-align: center;">
        <h3 style="color: #166534; font-family: var(--font-title); font-size: 1.25rem; margin-bottom: 4px;">
          <i class="fa-solid fa-book-atlas"></i> RANGKUMAN LENGKAP SELURUH MATERI TEKS LHO (ZONA 1 S.D. 6)
        </h3>
        <p style="color: #15803d; font-size: 0.85rem; margin: 0;">
          Diktat Lengkap Pembelajaran Bahasa Indonesia SMA (Fase E) — Seluruh konsep, struktur, kaidah kebahasaan, alur penulisan, buku tempel, dan vokal tersaji lengkap di bawah ini.
        </p>
      </div>
    `;

    GAME_ZONES_DATA.forEach(zone => {
      const isDone = gameState.visitedZones.includes(zone.id);
      html += `
        <div style="background: #f8fafc; border: 2px solid #cbd5e1; border-left: 6px solid #16a34a; border-radius: 12px; padding: 14px 18px; margin-top: 24px; margin-bottom: 14px; display: flex; justify-content: space-between; align-items: center;">
          <div>
            <h3 style="color: #166534; font-family: var(--font-title); font-size: 1.15rem; margin-bottom: 2px;">
              <i class="fa-solid fa-scroll"></i> Zona ${zone.id}: ${zone.title}
            </h3>
            <p style="color: #64748b; font-size: 0.82rem; margin: 0;">${zone.subtitle}</p>
          </div>
          <div>
            ${isDone 
              ? '<span style="background: #dcfce7; color: #166534; font-family: var(--font-title); font-size: 0.75rem; padding: 4px 12px; border-radius: 20px; font-weight: 700;">⭐ Selesai</span>'
              : '<span style="background: #f1f5f9; color: #64748b; font-family: var(--font-title); font-size: 0.75rem; padding: 4px 12px; border-radius: 20px;">Belum Selesai</span>'
            }
          </div>
        </div>
      `;

      zone.subtopics.forEach(sub => {
        html += `
          <div style="background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 12px; padding: 16px; margin-bottom: 14px; box-shadow: 0 2px 6px rgba(0,0,0,0.04);">
            <h4 style="color: #0284c7; font-family: var(--font-title); font-size: 1rem; margin-bottom: 10px;">
              <i class="fa-solid ${sub.icon}"></i> ${sub.title}
            </h4>
            ${sub.render()}
          </div>
        `;
      });
    });

    container.innerHTML = html;
    container.scrollTop = 0;
    return;
  }

  // Tampilan 1 Zona Spesifik
  const zone = GAME_ZONES_DATA.find(z => z.id === zoneId);
  if (!zone) return;

  const isDone = gameState.visitedZones.includes(zone.id);

  let html = `
    <div style="background: #f8fafc; border: 2px solid #e2e8f0; border-left: 6px solid #16a34a; border-radius: 12px; padding: 14px; margin-bottom: 14px; display: flex; justify-content: space-between; align-items: center;">
      <div>
        <h3 style="color: #166534; font-family: var(--font-title); font-size: 1.15rem; margin-bottom: 2px;">
          <i class="fa-solid fa-scroll"></i> Zona ${zone.id}: ${zone.title}
        </h3>
        <p style="color: #64748b; font-size: 0.82rem; margin: 0;">${zone.subtitle}</p>
      </div>
      <div>
        ${isDone 
          ? '<span style="background: #dcfce7; color: #166534; font-family: var(--font-title); font-size: 0.75rem; padding: 4px 12px; border-radius: 20px; font-weight: 700;">⭐ Selesai</span>'
          : '<span style="background: #f1f5f9; color: #64748b; font-family: var(--font-title); font-size: 0.75rem; padding: 4px 12px; border-radius: 20px;">Belum Selesai</span>'
        }
      </div>
    </div>
  `;

  zone.subtopics.forEach(sub => {
    html += `
      <div style="background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 12px; padding: 16px; margin-bottom: 14px; box-shadow: 0 2px 6px rgba(0,0,0,0.04);">
        <h4 style="color: #0284c7; font-family: var(--font-title); font-size: 1rem; margin-bottom: 10px;">
          <i class="fa-solid ${sub.icon}"></i> ${sub.title}
        </h4>
        ${sub.render()}
      </div>
    `;
  });

  container.innerHTML = html;
  container.scrollTop = 0;
}

function printCompleteBook() {
  playAudioEffect('click');

  const studentName = gameState.playerName || "Peserta Didik";
  const studentClass = gameState.playerClass ? `Kelas ${gameState.playerClass}` : "Kelas X A";
  const now = new Date();
  const dateStr = `${now.getDate()} ${["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"][now.getMonth()]} ${now.getFullYear()}`;

  let contentHtml = '';
  GAME_ZONES_DATA.forEach(zone => {
    contentHtml += `
      <div class="print-zone-section" style="margin-top: 24px; margin-bottom: 24px; page-break-inside: avoid;">
        <div style="background: #dcfce7; border-left: 6px solid #16a34a; padding: 10px 16px; border-radius: 0 8px 8px 0; margin-bottom: 14px;">
          <h3 style="margin: 0; color: #166534; font-size: 1.15rem;">ZONA ${zone.id}: ${zone.title.toUpperCase()}</h3>
          <p style="margin: 3px 0 0; color: #475569; font-size: 0.85rem;">${zone.subtitle}</p>
        </div>
    `;

    zone.subtopics.forEach(sub => {
      contentHtml += `
        <div style="border: 1px solid #cbd5e1; border-radius: 8px; padding: 14px; margin-bottom: 14px; background: #ffffff;">
          <h4 style="margin: 0 0 10px; color: #0284c7; font-size: 1rem; border-bottom: 1px dashed #e2e8f0; padding-bottom: 6px;">
            <i class="fa-solid ${sub.icon}"></i> ${sub.title}
          </h4>
          ${sub.render()}
        </div>
      `;
    });

    contentHtml += `</div>`;
  });

  const printWindow = window.open('', '_blank');
  if (!printWindow) {
    alert("Harap izinkan popup di peramban untuk membuka dokumen cetak lengkap!");
    window.print();
    return;
  }

  printWindow.document.write(`
    <!DOCTYPE html>
    <html lang="id">
    <head>
      <meta charset="UTF-8">
      <title>Modul Lengkap Teks LHO - ${studentName}</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          color: #1e293b;
          line-height: 1.6;
          padding: 30px;
          max-width: 900px;
          margin: 0 auto;
          background: #ffffff;
        }
        .doc-header {
          text-align: center;
          border-bottom: 3px double #0f172a;
          padding-bottom: 16px;
          margin-bottom: 24px;
        }
        .doc-header h1 {
          font-size: 1.5rem;
          margin: 0 0 4px;
          color: #15803d;
        }
        .doc-header h2 {
          font-size: 1.1rem;
          margin: 0 0 8px;
          color: #334155;
          font-weight: 600;
        }
        .doc-meta {
          display: flex;
          justify-content: space-between;
          background: #f1f5f9;
          padding: 10px 16px;
          border-radius: 8px;
          margin-bottom: 24px;
          font-size: 0.9rem;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          margin: 10px 0;
        }
        th, td {
          border: 1px solid #cbd5e1;
          padding: 8px;
          text-align: left;
        }
        th {
          background: #f8fafc;
        }
        .doc-footer {
          margin-top: 40px;
          border-top: 1.5px solid #cbd5e1;
          padding-top: 20px;
          display: flex;
          justify-content: space-between;
          page-break-inside: avoid;
        }
        .sig-block {
          text-align: center;
          width: 220px;
        }
        .sig-space {
          height: 60px;
        }
        .no-print-bar {
          background: #0f172a;
          color: #ffffff;
          padding: 12px 20px;
          border-radius: 8px;
          margin-bottom: 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .btn-print-now {
          background: #22c55e;
          color: #ffffff;
          border: none;
          padding: 10px 20px;
          font-weight: 700;
          font-size: 0.95rem;
          border-radius: 8px;
          cursor: pointer;
        }
        @media print {
          .no-print-bar { display: none !important; }
          body { padding: 0; }
        }
      </style>
    </head>
    <body>
      <div class="no-print-bar">
        <span>📖 <b>Buku Diktat Lengkap Teks LHO (Zona 1 s.d. 6 Lengkap)</b></span>
        <button class="btn-print-now" onclick="window.print()">
          <i class="fa-solid fa-print"></i> CETAK / SIMPAN SEBAGAI PDF
        </button>
      </div>

      <div class="doc-header">
        <h1>MODUL PEMBELAJARAN BAHASA INDONESIA SMA (FASE E)</h1>
        <h2>DIKTAT EKSPLORASI TEKS LAPORAN HASIL OBSERVASI (LHO)</h2>
        <small>Disusun Berdasarkan Capaian Pembelajaran Kurikulum Merdeka</small>
      </div>

      <div class="doc-meta">
        <div><b>Nama Peneliti:</b> ${studentName}</div>
        <div><b>Kelas / Fase:</b> ${studentClass} • Fase E</div>
        <div><b>Tanggal Cetak:</b> ${dateStr}</div>
      </div>

      ${contentHtml}

      <div class="doc-footer">
        <div class="sig-block">
          <span>Mengetahui,</span><br>
          <span>Orang Tua / Wali Siswa</span>
          <div class="sig-space"></div>
          <b>(......................................)</b>
        </div>
        <div class="sig-block">
          <span>${dateStr}</span><br>
          <span>Guru Bahasa Indonesia,</span>
          <div class="sig-space"></div>
          <b>Guru Bahasa Indonesia</b>
        </div>
      </div>

      <script>
        window.addEventListener('load', () => {
          setTimeout(() => {
            window.print();
          }, 600);
        });
      <\/script>
    </body>
    </html>
  `);
  printWindow.document.close();
}

// ========================================================
// 9. SERTIFIKAT KELULUSAN EKSPEDISI RESMI
// ========================================================
function showCertificateModal() {
  playAudioEffect('victory');

  if (typeof confetti === 'function') {
    confetti({ particleCount: 150, spread: 90, origin: { y: 0.6 } });
  }

  document.getElementById('cert-name').textContent = gameState.playerName || "Ananda Peneliti Muda";
  document.getElementById('cert-class').textContent = `${gameState.playerClass || "Kelas X A"} • Fase E`;

  const now = new Date();
  const dateStr = `${now.getDate()} ${["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"][now.getMonth()]} ${now.getFullYear()}`;
  document.getElementById('cert-date-today').textContent = dateStr;

  openModal('certificate-modal');
}

// ========================================================
// 10. SETUP & AVATAR SELECTION
// ========================================================
function openPlayerSetupModal() {
  openModal('player-setup-modal');
}

const AVATAR_IMAGES = {
  satria: 'assets/satria_3d.jpg',
  kirana: 'assets/kirana_3d.jpg',
  arga: 'assets/arga_3d.jpg',
  lestari: 'assets/lestari_3d.jpg'
};

function getAvatarImgSrc(key) {
  return AVATAR_IMAGES[key] || 'assets/satria_3d.jpg';
}

function selectAvatar(key, imgSrc, title, el) {
  playAudioEffect('click');
  document.querySelectorAll('.avatar-card-item').forEach(c => c.classList.remove('selected'));
  if (el) el.classList.add('selected');

  gameState.avatarKey = key;
  gameState.avatarEmoji = imgSrc;
  gameState.avatarTitle = title;
}

function confirmPlayerSetup(e) {
  if (e) e.preventDefault();
  const nameInput = document.getElementById('input-player-name');
  const classSelect = document.getElementById('input-player-class');

  if (!nameInput.value.trim() || !classSelect.value) {
    alert("Harap masukkan nama dan pilih kelas terlebih dahulu ya!");
    return;
  }

  gameState.playerName = nameInput.value.trim();
  gameState.playerClass = classSelect.value;

  saveGameProgress();
  updateHUDStats();
  closeModal('player-setup-modal');

  // Sinkronisasi otomatis ke Google Cloud & Rekap Guru
  syncStudentPresenceToCloud('PRESENSI_MASUK', 'Mulai Masuk Game Petualangan');

  playAudioEffect('levelUp');
  goToScreen('screen-hub');
}

function updateHUDStats() {
  const avatarSrc = getAvatarImgSrc(gameState.avatarKey);

  // Top nav bar
  const navName = document.getElementById('nav-player-name');
  const navClass = document.getElementById('nav-player-class');
  const navImg = document.getElementById('nav-avatar-img');
  const starCount = document.getElementById('nav-star-count');

  if (navName) navName.textContent = gameState.playerName || "Peneliti Muda";
  if (navClass) navClass.textContent = `Kelas ${gameState.playerClass || "X A"}`;
  if (navImg) navImg.src = avatarSrc;
  if (starCount) starCount.textContent = `${gameState.visitedZones.length} / 6 Zona`;

  // Hub Screen mascot display
  const hubImg = document.getElementById('hub-character-img');
  const hubName = document.getElementById('hub-character-name');
  if (hubImg) hubImg.src = avatarSrc;
  if (hubName) hubName.textContent = gameState.playerName || "Peneliti Muda";

  // Map pin avatar & top banner mascot
  const mapPinImg = document.getElementById('map-pin-img');
  const mapMascotImg = document.getElementById('map-mascot-img');
  if (mapPinImg) mapPinImg.src = avatarSrc;
  if (mapMascotImg) mapMascotImg.src = avatarSrc;

  // Update status setiap simpul misi (Terkunci / Aktif / Selesai)
  for (let i = 1; i <= 6; i++) {
    const node = document.getElementById(`node-zone-${i}`);
    const badge = document.getElementById(`star-badge-${i}`);
    const flag = document.getElementById(`flag-tag-${i}`);
    const isUnlocked = isZoneUnlocked(i);
    const isDone = gameState.visitedZones.includes(i);

    if (node) {
      if (!isUnlocked) {
        node.classList.add('node-locked');
        node.classList.remove('node-active', 'node-completed');
      } else if (isDone) {
        node.classList.remove('node-locked', 'node-active');
        node.classList.add('node-completed');
      } else {
        node.classList.remove('node-locked', 'node-completed');
        node.classList.add('node-active'); // Simpul aktif yang siap dijelajahi
      }
    }

    if (badge) {
      if (!isUnlocked) {
        badge.className = 'star-badge badge-locked';
        badge.innerHTML = '<i class="fa-solid fa-lock"></i>';
      } else if (isDone) {
        badge.className = 'star-badge completed';
        badge.innerHTML = '★';
      } else {
        badge.className = 'star-badge';
        badge.innerHTML = '☆';
      }
    }

    if (flag) {
      if (!isUnlocked) {
        flag.innerHTML = '<i class="fa-solid fa-lock"></i> KUNCI';
      } else if (isDone) {
        flag.innerHTML = 'SELESAI ★';
      } else {
        flag.innerHTML = `MISI ${i}`;
      }
    }
  }
}

function saveGameProgress() {
  try {
    localStorage.setItem(GAME_STORAGE_KEY, JSON.stringify({
      playerName: gameState.playerName,
      playerClass: gameState.playerClass,
      avatarKey: gameState.avatarKey,
      avatarEmoji: gameState.avatarEmoji,
      avatarTitle: gameState.avatarTitle,
      visitedZones: gameState.visitedZones,
      openedSubtopics: gameState.openedSubtopics || {}
    }));
  } catch (e) {
    console.warn("Storage save error:", e);
  }
}

function loadGameProgress() {
  try {
    const raw = localStorage.getItem(GAME_STORAGE_KEY);
    if (raw) {
      const data = JSON.parse(raw);
      if (data.playerName) gameState.playerName = data.playerName;
      if (data.playerClass) gameState.playerClass = data.playerClass;
      if (data.avatarKey) gameState.avatarKey = data.avatarKey;
      if (data.avatarEmoji) gameState.avatarEmoji = data.avatarEmoji;
      if (data.avatarTitle) gameState.avatarTitle = data.avatarTitle;
      if (Array.isArray(data.visitedZones)) gameState.visitedZones = data.visitedZones;
      if (data.openedSubtopics) gameState.openedSubtopics = data.openedSubtopics;

      const nameInput = document.getElementById('input-player-name');
      const classSelect = document.getElementById('input-player-class');
      if (nameInput && gameState.playerName) nameInput.value = gameState.playerName;
      if (classSelect && gameState.playerClass) classSelect.value = gameState.playerClass;

      // Sync avatar selection card in modal
      document.querySelectorAll('.avatar-card-item').forEach(c => {
        if (c.getAttribute('onclick') && c.getAttribute('onclick').includes(`'${gameState.avatarKey}'`)) {
          c.classList.add('selected');
        } else {
          c.classList.remove('selected');
        }
      });
    }
  } catch (e) {
    console.warn("Storage load error:", e);
  }
}

// ========================================================
// 12. PORTAL PANTAUAN GURU & GOOGLE SHEETS SYNC
// ========================================================
const LHO_WEBHOOK_KEY = 'lho_game_webhook_url';
const LHO_PIN_KEY = 'lho_game_teacher_pin';
const LHO_STUDENTS_KEY = 'lho_game_students_records';
const LHO_DEFAULT_PIN = '55555';

function getTeacherPIN() {
  try {
    return localStorage.getItem(LHO_PIN_KEY) || LHO_DEFAULT_PIN;
  } catch (e) {
    return LHO_DEFAULT_PIN;
  }
}

function openTeacherPortalAuth() {
  playAudioEffect('click');
  const pinInput = document.getElementById('input-teacher-pin');
  const errMsg = document.getElementById('pin-error-msg');
  if (pinInput) pinInput.value = '';
  if (errMsg) errMsg.classList.add('hidden');
  openModal('modal-teacher-auth');
}

function toggleTeacherPinEye() {
  const pinInput = document.getElementById('input-teacher-pin');
  const eyeIcon = document.getElementById('pin-eye-icon');
  if (!pinInput || !eyeIcon) return;
  if (pinInput.type === 'password') {
    pinInput.type = 'text';
    eyeIcon.classList.remove('fa-eye');
    eyeIcon.classList.add('fa-eye-slash');
  } else {
    pinInput.type = 'password';
    eyeIcon.classList.remove('fa-eye-slash');
    eyeIcon.classList.add('fa-eye');
  }
}

function handleTeacherPinSubmit(e) {
  if (e) e.preventDefault();
  const pinInput = document.getElementById('input-teacher-pin');
  const errMsg = document.getElementById('pin-error-msg');
  const enteredPin = (pinInput ? pinInput.value : '').trim();
  const currentPin = getTeacherPIN();

  if (enteredPin === currentPin) {
    playAudioEffect('victory');
    closeModal('modal-teacher-auth');
    openTeacherDashboard();
  } else {
    playAudioEffect('wrong');
    if (errMsg) errMsg.classList.remove('hidden');
    if (pinInput) {
      pinInput.value = '';
      pinInput.focus();
    }
  }
}

function openTeacherDashboard() {
  playAudioEffect('click');
  // Load Webhook URL into input (Mendukung URL terpadu dari Paket 1/2/3)
  const webhookInput = document.getElementById('input-lho-webhook');
  const savedUrl = localStorage.getItem('PPG_MASTER_WEBHOOK_URL') || localStorage.getItem(LHO_WEBHOOK_KEY) || localStorage.getItem('GOOGLE_WEBHOOK_URL') || '';
  if (webhookInput) webhookInput.value = savedUrl;

  updateDashboardMetrics();
  renderTeacherDashboardTable();
  openModal('modal-teacher-dashboard');
}

function getStoredStudents() {
  try {
    return JSON.parse(localStorage.getItem(LHO_STUDENTS_KEY) || '[]');
  } catch (e) {
    return [];
  }
}

function updateDashboardMetrics() {
  const students = getStoredStudents();
  const totalEl = document.getElementById('dash-total-students');
  const finishedEl = document.getElementById('dash-finished-all');
  const wsEl = document.getElementById('dash-wordsearch-count');
  const cloudStatusEl = document.getElementById('dash-cloud-status');

  if (totalEl) totalEl.textContent = students.length;

  const finishedCount = students.filter(s => Array.isArray(s.visitedZones) && s.visitedZones.length >= 6).length;
  if (finishedEl) finishedEl.textContent = finishedCount;

  const wsCount = students.filter(s => s.wordSearchStatus && s.wordSearchStatus.includes('Selesai 7/7')).length;
  if (wsEl) wsEl.textContent = wsCount;

  const webhook = localStorage.getItem(LHO_WEBHOOK_KEY);
  if (cloudStatusEl) {
    if (webhook && webhook.startsWith('http')) {
      cloudStatusEl.textContent = '🟢 Terhubung';
      cloudStatusEl.style.color = '#15803d';
    } else {
      cloudStatusEl.textContent = '🟡 Lokal Saja';
      cloudStatusEl.style.color = '#b45309';
    }
  }
}

function renderTeacherDashboardTable(customList) {
  const tbody = document.getElementById('dash-table-body');
  if (!tbody) return;

  const students = customList || getStoredStudents();

  if (students.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="9" style="text-align: center; padding: 32px 16px; color: #64748b;">
          <div style="font-size: 2rem; margin-bottom: 8px;">📋</div>
          <b>Belum ada data presensi siswa yang tersimpan.</b><br>
          <span style="font-size: 0.8rem;">Data akan otomatis tercatat begitu siswa mengisi nama dan bermain.</span>
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = students.map((s, idx) => {
    const avatarSrc = getAvatarImgSrc(s.avatarKey);
    const visitedCount = (s.visitedZones && s.visitedZones.length) || 0;
    const isCompleted = visitedCount >= 6;
    const zoneBadge = isCompleted 
      ? `<span class="badge-zone-pill badge-zone-complete"><i class="fa-solid fa-star"></i> 6/6 (Tuntas)</span>`
      : `<span class="badge-zone-pill badge-zone-progress">${visitedCount}/6 Zona</span>`;

    const wsStatus = s.wordSearchStatus || '-';
    const isWsDone = wsStatus.includes('Selesai');
    const wsBadge = isWsDone 
      ? `<span style="color: #15803d; font-weight: 700;">✓ 7 Kata</span>`
      : `<span style="color: #64748b;">${wsStatus}</span>`;

    const statusBadge = isCompleted
      ? `<span style="color: #15803d; font-weight: 700;">🌟 Selesai</span>`
      : `<span style="color: #0284c7; font-weight: 600;">Menjelajah</span>`;

    return `
      <tr>
        <td style="text-align: center; font-weight: 700; color: #64748b;">${idx + 1}</td>
        <td style="font-size: 0.8rem; color: #475569; white-space: nowrap;">${s.timestamp || '-'}</td>
        <td style="font-weight: 700; color: #1e293b;">${s.playerName || '-'}</td>
        <td><span style="background: #f1f5f9; padding: 2px 8px; border-radius: 6px; font-weight: 600;">${s.playerClass || '-'}</span></td>
        <td>
          <div class="badge-avatar-pill">
            <img src="${avatarSrc}" class="avatar-tiny-thumb" alt="avatar">
            <span>${s.avatarTitle || s.avatarKey || 'Karakter'}</span>
          </div>
        </td>
        <td>${zoneBadge}</td>
        <td>${wsBadge}</td>
        <td>${statusBadge}</td>
        <td>
          <button class="btn-subtle text-danger" style="padding: 3px 8px; font-size: 0.74rem;" onclick="deleteStudentRecord(${idx})" title="Hapus Baris">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </td>
      </tr>
    `;
  }).join('');
}

function filterDashboardTable() {
  const search = (document.getElementById('filter-search-name')?.value || '').toLowerCase().trim();
  const classFilter = (document.getElementById('filter-class-select')?.value || '').trim();
  const allStudents = getStoredStudents();

  const filtered = allStudents.filter(s => {
    const matchName = !search || (s.playerName || '').toLowerCase().includes(search);
    const matchClass = !classFilter || (s.playerClass || '') === classFilter;
    return matchName && matchClass;
  });

  renderTeacherDashboardTable(filtered);
}

function saveLhoWebhookUrl() {
  const input = document.getElementById('input-lho-webhook');
  const url = (input ? input.value : '').trim();
  if (!url) {
    alert("Harap masukkan URL Web App Google Apps Script!");
    return;
  }
  if (!url.startsWith('https://script.google.com/')) {
    if (!confirm("URL biasanya diawali dengan 'https://script.google.com/macros/s/.../exec'. Apakah Anda yakin ingin menyimpan URL ini?")) {
      return;
    }
  }

  localStorage.setItem(LHO_WEBHOOK_KEY, url);
  localStorage.setItem("PPG_MASTER_WEBHOOK_URL", url);
  localStorage.setItem("GOOGLE_WEBHOOK_URL", url);
  updateDashboardMetrics();
  alert("✅ URL Integrasi Google Spreadsheet Master Berhasil Disimpan!\n\nSetiap aktivitas dan presensi siswa akan disinkronkan secara live ke Sheet 2 Spreadsheet Anda.");
}

function testLhoCloudConnection() {
  const input = document.getElementById('input-lho-webhook');
  const url = (input ? input.value : '').trim() || localStorage.getItem(LHO_WEBHOOK_KEY);

  if (!url) {
    alert("⚠️ Harap masukkan URL Web App Google Apps Script terlebih dahulu!");
    return;
  }

  alert("📡 Mengirimkan data uji coba ke Google Spreadsheet...\nMohon tunggu sejenak lalu periksa spreadsheet Anda.");

  const now = new Date();
  const testPayload = {
    timestamp: now.toLocaleString("id-ID", { timeZone: "Asia/Jakarta" }),
    playerName: "Uji Coba Sistem Guru",
    playerClass: "Guru Pengampu",
    avatarKey: "pak_guru",
    avatarTitle: "Guru Bahasa Indonesia",
    visitedZones: [1, 2, 3, 4, 5, 6],
    wordSearchStatus: "Selesai 7/7 Kata (Tes)",
    eventType: "TES_KONEKSI",
    eventNote: "Verifikasi integrasi cloud dari Portal Guru"
  };

  fetch(url, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(testPayload)
  }).then(() => {
    alert("🎉 Sinyal data berhasil terkirim ke Google Sheets!\n\nSilakan buka file Google Spreadsheet Anda untuk memeriksa baris data 'Uji Coba Sistem Guru'.");
  }).catch(err => {
    console.error("Test Error:", err);
    alert("Terjadi kendala saat mengirim sinyal. Pastikan link Web App sudah di-deploy dengan akses 'Anyone' (Siapa saja).");
  });
}

function openGoogleSheetGuideModal() {
  openModal('modal-gas-guide');
}

function openChangePinModal() {
  const p1 = document.getElementById('input-old-pin');
  const p2 = document.getElementById('input-new-pin');
  const p3 = document.getElementById('input-confirm-pin');
  if (p1) p1.value = '';
  if (p2) p2.value = '';
  if (p3) p3.value = '';
  openModal('modal-change-pin');
}

function handleChangePinSubmit(e) {
  if (e) e.preventDefault();
  const oldPin = document.getElementById('input-old-pin')?.value.trim();
  const newPin = document.getElementById('input-new-pin')?.value.trim();
  const confirmPin = document.getElementById('input-confirm-pin')?.value.trim();
  const currentPin = getTeacherPIN();

  if (oldPin !== currentPin) {
    alert("⚠️ PIN Lama tidak sesuai!");
    return;
  }
  if (!newPin || newPin.length < 4) {
    alert("⚠️ PIN Baru minimal 4 karakter (angka/huruf)!");
    return;
  }
  if (newPin !== confirmPin) {
    alert("⚠️ Konfirmasi PIN baru tidak cocok!");
    return;
  }

  localStorage.setItem(LHO_PIN_KEY, newPin);
  alert("✅ PIN Portal Guru Berhasil Diperbarui!\n\nHarap ingat PIN baru Anda untuk membuka portal pantauan di masa mendatang.");
  closeModal('modal-change-pin');
}

function exportStudentsToCSV() {
  const students = getStoredStudents();
  if (students.length === 0) {
    alert("Belum ada data presensi siswa untuk diunduh!");
    return;
  }

  let csv = "No,Waktu Akses,Nama Peserta Didik,Kelas / Fase,Avatar,Zona Selesai,Game Cari Kata,Status Petualangan\n";
  students.forEach((s, idx) => {
    const vCount = (s.visitedZones && s.visitedZones.length) || 0;
    const cleanName = (s.playerName || '').replace(/,/g, ' ');
    const cleanClass = (s.playerClass || '').replace(/,/g, ' ');
    const cleanAvatar = (s.avatarTitle || s.avatarKey || '').replace(/,/g, ' ');
    const cleanWs = (s.wordSearchStatus || '-').replace(/,/g, ' ');
    const cleanStatus = vCount >= 6 ? 'Tuntas 6/6' : `${vCount}/6 Zona`;

    csv += `${idx + 1},"${s.timestamp || '-'}","${cleanName}","${cleanClass}","${cleanAvatar}","${cleanStatus}","${cleanWs}","${vCount >= 6 ? 'Selesai' : 'Sedang Menjelajah'}"\n`;
  });

  const blob = new Blob(["\uFEFF" + csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", `Rekap_Presensi_Game_LHO_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function printTeacherAttendance() {
  window.print();
}

function clearTeacherStudentData() {
  if (confirm("⚠️ Apakah Anda yakin ingin membersihkan riwayat data presensi siswa di perangkat ini?\n\n(Catatan: Data yang sudah terkirim ke Google Spreadsheet tidak akan terhapus).")) {
    localStorage.removeItem(LHO_STUDENTS_KEY);
    updateDashboardMetrics();
    renderTeacherDashboardTable();
    alert("Data lokal berhasil dibersihkan.");
  }
}

function deleteStudentRecord(index) {
  let students = getStoredStudents();
  if (index >= 0 && index < students.length) {
    if (confirm(`Hapus baris data siswa: ${students[index].playerName}?`)) {
      students.splice(index, 1);
      localStorage.setItem(LHO_STUDENTS_KEY, JSON.stringify(students));
      updateDashboardMetrics();
      renderTeacherDashboardTable();
    }
  }
}

function syncStudentPresenceToCloud(eventType, eventNote) {
  if (!gameState.playerName || gameState.playerName === "Peneliti Muda") return;

  const now = new Date();
  const timeFormatted = now.toLocaleString("id-ID", {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  const payload = {
    timestamp: timeFormatted,
    playerName: gameState.playerName,
    playerClass: gameState.playerClass || "X A",
    avatarKey: gameState.avatarKey,
    avatarTitle: gameState.avatarTitle || "Karakter Peneliti",
    visitedZones: gameState.visitedZones || [],
    wordSearchStatus: (gameState.wordSearch && gameState.wordSearch.foundWords && gameState.wordSearch.foundWords.length === 7) 
      ? "Selesai 7/7 Kata" 
      : `${(gameState.wordSearch && gameState.wordSearch.foundWords) ? gameState.wordSearch.foundWords.length : 0}/7 Kata`,
    eventType: eventType || "AKTIVITAS",
    eventNote: eventNote || "-"
  };

  // 1. Simpan ke Local Storage Guru (Local Mirror agar guru bisa lihat di perangkat ini)
  try {
    let records = JSON.parse(localStorage.getItem(LHO_STUDENTS_KEY) || "[]");
    const existingIndex = records.findIndex(r => 
      (r.playerName || '').toLowerCase().trim() === payload.playerName.toLowerCase().trim() &&
      (r.playerClass || '').toLowerCase().trim() === payload.playerClass.toLowerCase().trim()
    );

    if (existingIndex >= 0) {
      records[existingIndex] = { ...records[existingIndex], ...payload };
    } else {
      records.push(payload);
    }
    localStorage.setItem(LHO_STUDENTS_KEY, JSON.stringify(records));
  } catch (err) {
    console.warn("Gagal menyimpan rekap lokal:", err);
  }

  // 2. Kirim ke Google Apps Script / Google Sheets jika URL sudah dikonfigurasi
  const webhookUrl = localStorage.getItem("PPG_MASTER_WEBHOOK_URL") || localStorage.getItem(LHO_WEBHOOK_KEY) || localStorage.getItem("GOOGLE_WEBHOOK_URL");
  if (webhookUrl && webhookUrl.startsWith('http')) {
    fetch(webhookUrl, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "text/plain;charset=utf-8"
      },
      body: JSON.stringify(payload)
    }).then(() => {
      console.log("☁️ Presensi siswa berhasil dikirim ke Google Sheets (Sheet 2).");
    }).catch(err => {
      console.warn("Gagal menyinkronkan ke Google Cloud:", err);
    });
  }
}

// ========================================================
// 11. INITIALIZATION ON DOM READY
// ========================================================
document.addEventListener('DOMContentLoaded', () => {
  loadGameProgress();
  updateHUDStats();

  // Close modals when clicking overlay outside card
  document.querySelectorAll('.adventure-modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.classList.add('hidden');
      }
    });
  });
});

// Expose functions globally for inline HTML onclick handlers
window.goToScreen = goToScreen;
window.startFromWelcome = startFromWelcome;
window.openModal = openModal;
window.closeModal = closeModal;
window.selectMissionNode = selectMissionNode;
window.checkAllZonesFinished = checkAllZonesFinished;
window.switchSubtopic = switchSubtopic;
window.prevSubtopic = prevSubtopic;
window.nextSubtopic = nextSubtopic;
window.completeCurrentMission = completeCurrentMission;
window.highlightStructure = highlightStructure;
window.initWordSearchGame = initWordSearchGame;
window.openCodexModal = openCodexModal;
window.closeCodexModal = closeCodexModal;
window.renderCodexZone = renderCodexZone;
window.printCompleteBook = printCompleteBook;
window.showCertificateModal = showCertificateModal;
window.openPlayerSetupModal = openPlayerSetupModal;
window.selectAvatar = selectAvatar;
window.confirmPlayerSetup = confirmPlayerSetup;
window.toggleMute = toggleMute;
window.playIntonationTone = playIntonationTone;

// Expose Teacher Portal & Monitoring functions
window.openTeacherPortalAuth = openTeacherPortalAuth;
window.toggleTeacherPinEye = toggleTeacherPinEye;
window.handleTeacherPinSubmit = handleTeacherPinSubmit;
window.openTeacherDashboard = openTeacherDashboard;
window.renderTeacherDashboardTable = renderTeacherDashboardTable;
window.filterDashboardTable = filterDashboardTable;
window.saveLhoWebhookUrl = saveLhoWebhookUrl;
window.testLhoCloudConnection = testLhoCloudConnection;
window.openGoogleSheetGuideModal = openGoogleSheetGuideModal;
window.openChangePinModal = openChangePinModal;
window.handleChangePinSubmit = handleChangePinSubmit;
window.exportStudentsToCSV = exportStudentsToCSV;
window.printTeacherAttendance = printTeacherAttendance;
window.clearTeacherStudentData = clearTeacherStudentData;
window.deleteStudentRecord = deleteStudentRecord;
window.syncStudentPresenceToCloud = syncStudentPresenceToCloud;
