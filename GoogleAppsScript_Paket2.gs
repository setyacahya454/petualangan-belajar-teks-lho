/**
 * =========================================================================
 * SKRIP MASTER TERPADU: 3 SHEET DALAM 1 SPREADSHEET (PPG BAHASA INDONESIA)
 * =========================================================================
 * 
 * Satu URL Web App ini otomatis membagi data ke 3 Sheet berbeda:
 * 📑 Sheet 1: "01. Asesmen Diagnostik"  (Gaya Belajar, Minat, Emosi)
 * 📑 Sheet 2: "02. Presensi Game LHO"    (Presensi Siswa, 6 Zona, Cari Kata)
 * 📑 Sheet 3: "03. LKPD & Kuis HOTS"     (Nilai 4 Misi LKPD, Skor Kuis, XP)
 * 
 * CARA MEMASANG DI GOOGLE SPREADSHEET (HANYA 1 MENIT):
 * 1. Buka Google Spreadsheet yang sudah Pak Guru miliki saat ini.
 * 2. Klik menu di atas: Ekstensi (Extensions) > Apps Script.
 * 3. Hapus seluruh isi kode lama di Apps Script, lalu SALIN & TEMPEL (Copy-Paste)
 *    seluruh skrip Master ini.
 * 4. Klik ikon Disket (Simpan).
 * 5. Klik tombol biru "Terapkan" (Deploy) > "Kelola Penerapan" (Manage Deployments):
 *    - Klik ikon Pensil (Edit) pada penerapan aktif.
 *    - Pada Versi: Pilih "Versi Baru" (New Version).
 *    - Klik "Terapkan" (Deploy).
 * 6. Selesai! URL Web App tetap sama persis dan sekarang sudah bisa menerima
 *    data dari Paket 1, Paket 2, dan Paket 3 sekaligus ke masing-masing sheet!
 */

// Email guru untuk notifikasi otomatis (opsional)
var GURU_EMAIL = "setyacahya454@gmail.com";

function doPost(e) {
  try {
    var contents = e.postData.contents;
    var data = JSON.parse(contents);
    var ss = SpreadsheetApp.getActiveSpreadsheet();

    // =====================================================================
    // 1. DETEKSI: PAKET 1 (ASESMEN DIAGNOSTIK NON-KOGNITIF)
    // =====================================================================
    if (data.conclusion || data.learningStyle || data.packageType === "DIAGNOSTIK" || (data.answers && !data.scores)) {
      var sheet1 = getOrCreateSheet(ss, "01. Asesmen Diagnostik", [
        "Waktu Pengisian",
        "Nama Siswa",
        "Kelas / Fase",
        "No. Absen",
        "GAYA BELAJAR UTAMA",
        "Sub Gaya Belajar",
        "MINAT & BAKAT KARYA",
        "Topik Minat Baca",
        "AKTIVITAS BELAJAR RUMAH",
        "Kesejahteraan Emosi",
        "Tips Belajar Guru",
        "Jawaban 25 Butir"
      ], "#58b398");

      var conc = data.conclusion || {};
      var answersSummary = "";
      if (data.answers) {
        for (var i = 1; i <= 25; i++) {
          if (data.answers[i]) answersSummary += "Q" + i + ":" + data.answers[i] + "; ";
        }
      }

      sheet1.appendRow([
        data.timestamp || getWaktuSekarang(),
        data.name || data.playerName || "-",
        data.classGrade || data.playerClass || "-",
        data.studentNumber || "-",
        conc.learningStyle || data.learningStyle || "-",
        conc.styleSub || "-",
        conc.product || "-",
        conc.topic || "-",
        conc.homeActivity || "-",
        conc.emotionStatus || "-",
        conc.tips || "-",
        answersSummary
      ]);

      autoFitColumns(sheet1, 12);
      return responseSuccess("Data Paket 1 (Asesmen Diagnostik) berhasil masuk ke Sheet 1.");
    }

    // =====================================================================
    // 2. DETEKSI: PAKET 3 (GAME LKPD DAN ASESMEN TEKS LHO)
    // =====================================================================
    if (data.scores || data.packageType === "LKPD_KUIS" || data.lkpdMissions || typeof data.quizScore !== 'undefined') {
      var sheet3 = getOrCreateSheet(ss, "03. LKPD & Kuis HOTS", [
        "No",
        "Waktu Pengisian",
        "Nama Siswa",
        "Kelas / Fase",
        "Misi 1 (Struktur LHO)",
        "Misi 2 (Fakta vs Opini)",
        "Misi 3 (Adiksimba)",
        "Misi 4 (Kaidah Baku)",
        "Skor Kuis HOTS",
        "Rata-Rata Nilai",
        "Total XP",
        "Predikat Kelulusan"
      ], "#d97706");

      var sc = data.scores || {};
      var s1 = sc.task1 !== null && sc.task1 !== undefined ? sc.task1 : (data.scoreTask1 || "-");
      var s2 = sc.task2 !== null && sc.task2 !== undefined ? sc.task2 : (data.scoreTask2 || "-");
      var s3 = sc.task3 !== null && sc.task3 !== undefined ? sc.task3 : (data.scoreTask3 || "-");
      var s4 = sc.task4 !== null && sc.task4 !== undefined ? sc.task4 : (data.scoreTask4 || "-");
      var sQuiz = sc.quiz !== null && sc.quiz !== undefined ? sc.quiz : (data.quizScore || "-");
      
      var nama3 = (data.playerName || data.name || "-").trim();
      var kelas3 = (data.playerClass || data.classGrade || "-").trim();

      // Hitung rata-rata angka yang ada
      var validScores = [s1, s2, s3, s4, sQuiz].filter(function(v) { return typeof v === 'number'; });
      var avg = validScores.length > 0 ? Math.round(validScores.reduce(function(a, b){ return a + b; }, 0) / validScores.length) : "-";
      var predikat = avg >= 85 ? "🌟 Sangat Mahir (A)" : (avg >= 75 ? "👍 Mahir (B)" : (avg >= 60 ? "Cukup (C)" : "Perlu Bimbingan (D)"));

      // Update jika siswa sudah ada, atau buat baris baru
      var targetRow3 = findRowByStudent(sheet3, nama3, kelas3, 3, 4);
      if (targetRow3 > 0) {
        sheet3.getRange(targetRow3, 2).setValue(data.timestamp || getWaktuSekarang());
        sheet3.getRange(targetRow3, 5).setValue(s1);
        sheet3.getRange(targetRow3, 6).setValue(s2);
        sheet3.getRange(targetRow3, 7).setValue(s3);
        sheet3.getRange(targetRow3, 8).setValue(s4);
        sheet3.getRange(targetRow3, 9).setValue(sQuiz);
        sheet3.getRange(targetRow3, 10).setValue(avg);
        sheet3.getRange(targetRow3, 11).setValue(data.totalXP || "-");
        sheet3.getRange(targetRow3, 12).setValue(predikat);
      } else {
        var no3 = sheet3.getLastRow();
        sheet3.appendRow([
          no3,
          data.timestamp || getWaktuSekarang(),
          nama3,
          kelas3,
          s1,
          s2,
          s3,
          s4,
          sQuiz,
          avg,
          data.totalXP || "-",
          predikat
        ]);
      }

      autoFitColumns(sheet3, 12);
      return responseSuccess("Data Paket 3 (LKPD & Kuis) berhasil masuk ke Sheet 3.");
    }

    // =====================================================================
    // 3. DETEKSI: PAKET 2 (GAME PETUALANGAN BELAJAR TEKS LHO)
    // =====================================================================
    var sheet2 = getOrCreateSheet(ss, "02. Presensi Game LHO", [
      "No",
      "Waktu Terakhir Aktif",
      "Nama Siswa",
      "Kelas / Fase",
      "Avatar Karakter",
      "Zona Selesai",
      "Daftar Zona Tuntas",
      "Game Cari Kata",
      "Status Petualangan",
      "Catatan Aktivitas"
    ], "#15803d");

    var nama2 = (data.playerName || data.name || "-").trim();
    var kelas2 = (data.playerClass || data.classGrade || "-").trim();
    var avatar2 = data.avatarTitle || data.avatarKey || "Karakter Peneliti";
    var vz = Array.isArray(data.visitedZones) ? data.visitedZones : [];
    var vzCount = vz.length;
    var mapNames = {
      1: "Zona A (Konsep LHO)",
      2: "Zona B (Struktur LHO)",
      3: "Zona C (Ciri Kebahasaan)",
      4: "Zona D (Definisi & Deskripsi)",
      5: "Zona E (Langkah Menulis)",
      6: "Zona F (Etika Ilmiah)"
    };
    var vzNames = vz.map(function(z) { return mapNames[z] || ("Zona " + z); }).join("; ");
    var ws = data.wordSearchStatus || (data.eventType === "WORD_SEARCH_COMPLETE" ? "Selesai 7/7 Kata" : "-");
    var status2 = vzCount >= 6 ? "🌟 Ekspedisi Tuntas (6/6)" : ("Sedang Menjelajah (" + vzCount + "/6 Zona)");
    var catatan2 = data.eventNote || data.eventType || "Presensi Aktif";
    var waktu2 = data.timestamp || getWaktuSekarang();

    var targetRow2 = findRowByStudent(sheet2, nama2, kelas2, 3, 4);
    if (targetRow2 > 0) {
      sheet2.getRange(targetRow2, 2).setValue(waktu2);
      sheet2.getRange(targetRow2, 5).setValue(avatar2);
      sheet2.getRange(targetRow2, 6).setValue(vzCount + " / 6 Zona");
      sheet2.getRange(targetRow2, 7).setValue(vzNames || "-");
      if (ws && ws !== "-") sheet2.getRange(targetRow2, 8).setValue(ws);
      sheet2.getRange(targetRow2, 9).setValue(status2);
      sheet2.getRange(targetRow2, 10).setValue(catatan2);
    } else {
      var no2 = sheet2.getLastRow();
      sheet2.appendRow([
        no2,
        waktu2,
        nama2,
        kelas2,
        avatar2,
        vzCount + " / 6 Zona",
        vzNames || "-",
        ws,
        status2,
        catatan2
      ]);
    }

    autoFitColumns(sheet2, 10);
    return responseSuccess("Data Paket 2 (Presensi Game LHO) berhasil masuk ke Sheet 2.");

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// =========================================================================
// FUNGSI PEMBANTU (HELPER FUNCTIONS)
// =========================================================================

function getOrCreateSheet(ss, sheetName, headers, headerColor) {
  var sheet = ss.getSheetByName(sheetName);
  if (!sheet) {
    sheet = ss.insertSheet(sheetName);
  }

  // Jika masih kosong, pasang Header baris pertama
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(headers);
    var hr = sheet.getRange(1, 1, 1, headers.length);
    hr.setBackground(headerColor || "#15803d");
    hr.setFontColor("#ffffff");
    hr.setFontWeight("bold");
    hr.setHorizontalAlignment("center");
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function findRowByStudent(sheet, name, grade, colName, colGrade) {
  var data = sheet.getDataRange().getValues();
  for (var r = 1; r < data.length; r++) {
    var n = (data[r][colName - 1] || "").toString().toLowerCase().trim();
    var g = (data[r][colGrade - 1] || "").toString().toLowerCase().trim();
    if (n === name.toLowerCase().trim() && g === grade.toLowerCase().trim()) {
      return r + 1; // 1-based index
    }
  }
  return -1;
}

function autoFitColumns(sheet, totalCols) {
  for (var c = 1; c <= totalCols; c++) {
    try { sheet.autoResizeColumn(c); } catch(e){}
  }
}

function getWaktuSekarang() {
  return new Date().toLocaleString("id-ID", { timeZone: "Asia/Jakarta" });
}

function responseSuccess(msg) {
  return ContentService.createTextOutput(JSON.stringify({
    status: "success",
    message: msg
  })).setMimeType(ContentService.MimeType.JSON);
}

function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({
    status: "active",
    message: "Google Apps Script Master (3 Paket Pembelajaran Bahasa Indonesia SMA) Aktif dan Siap Digunakan!"
  })).setMimeType(ContentService.MimeType.JSON);
}
