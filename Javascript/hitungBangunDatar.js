// 1. Fungsi untuk menghitung Persegi
function hitungPersegi(sisi) {
  const luas = sisi * sisi;
  const keliling = 4 * sisi;
  return { luas, keliling };
}

// 2. Fungsi untuk menghitung Persegi Panjang
function hitungPersegiPanjang(panjang, lebar) {
  const luas = panjang * lebar;
  const keliling = 2 * (panjang + lebar);
  return { luas, keliling };
}

// 3. Fungsi untuk menghitung Lingkaran
function hitungLingkaran(r) {
  const luas = Math.PI * r * r;
  const keliling = 2 * Math.PI * r;
  return {
    luas: parseFloat(luas.toFixed(2)),
    keliling: parseFloat(keliling.toFixed(2)),
  };
}

// 4. Fungsi untuk menghitung Segitiga Sama Sisi
function hitungSegitigaSamaSisi(alas, tinggi, sisi) {
  const luas = 0.5 * alas * tinggi;
  const keliling = 3 * sisi;
  return { luas, keliling };
}

function main() {
  const dataPersegi = { sisi: 8 };
  const dataPersegiPanjang = { panjang: 9, lebar: 3 };
  const dataLingkaran = { jariJari: 6 };
  const dataSegitiga = { alas: 6, tinggi: 4, sisi: 6 };

  const persegi = hitungPersegi(dataPersegi.sisi);
  const persegiPanjang = hitungPersegiPanjang(
    dataPersegiPanjang.panjang,
    dataPersegiPanjang.lebar,
  );
  const lingkaran = hitungLingkaran(dataLingkaran.jariJari);
  const segitiga = hitungSegitigaSamaSisi(
    dataSegitiga.alas,
    dataSegitiga.tinggi,
    dataSegitiga.sisi,
  );

  console.log("$ node hitungBangunDatar.js");
  console.log("===== MENGHITUNG LUAS DAN KELILING BANGUN DATAR =====");
  console.log("");

  console.log(">> Luas Bangun Datar <<");
  console.log(
    `Luas Persegi Dengan Sisi ${dataPersegi.sisi} Adalah ${persegi.luas}`,
  );
  console.log(
    `Luas Persegi Panjang Dengan Panjang ${dataPersegiPanjang.panjang} Dan Lebar ${dataPersegiPanjang.lebar} Adalah ${persegiPanjang.luas}`,
  );
  console.log(
    `Luas Lingkaran Dengan Jari - Jari ${dataLingkaran.jariJari} Adalah ${lingkaran.luas}`,
  );
  console.log(
    `Luas Segitiga Dengan Alas ${dataSegitiga.alas} Dan Tinggi ${dataSegitiga.tinggi} Adalah ${segitiga.luas}`,
  );

  console.log("");
  console.log(">> Keliling Bangun Datar <<");
  console.log(
    `Keliling Persegi Dengan Sisi ${dataPersegi.sisi} Adalah ${persegi.keliling}`,
  );
  console.log(
    `Keliling Persegi Panjang Dengan Panjang ${dataPersegiPanjang.panjang} Dan Lebar ${dataPersegiPanjang.lebar} Adalah ${persegiPanjang.keliling}`,
  );
  console.log(
    `Keliling Lingkaran Dengan Jari - Jari ${dataLingkaran.jariJari} Adalah ${lingkaran.keliling}`,
  );
  console.log(
    `Keliling Segitiga Dengan Sisi ${dataSegitiga.sisi} Adalah ${segitiga.keliling}`,
  );
}

// Menjalankan program utama
main();
