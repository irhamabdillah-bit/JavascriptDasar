console.log("$ node loopingAktivitas.js");

for (let angka = 1; angka <= 20; angka++) {
  if (angka % 2 !== 0 && angka % 3 !== 0) {
    console.log(angka, "- Apel Pagi");
  } else if (angka % 2 == 0 && angka % 3 !== 0) {
    console.log(angka, "- Mengikuti Pelatihan");
  } else if (angka % 2 !== 0 && angka % 3 == 0) {
    console.log(angka, "- Mengikuti Uji Kopetensi");
  } else {
    console.log(angka, "- Mendapatkan Sertifikat");
  }
}
