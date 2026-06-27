const hargaNasiGoreng = 25000;

const hargaMieGoreng = 22000;

const hargaCapcay = 32000;

const totalHarga = hargaNasiGoreng + hargaMieGoreng + hargaCapcay;

const diskon = 10; // diskon 10%

const hargaSetelahDiskon = totalHarga - (totalHarga * diskon) / 100;

const pembayaran = 100000;

const kembalian = pembayaran - hargaSetelahDiskon;

console.log("$ node hitungDiskon.js");
console.log("Harga Nasi Goreng = Rp." + hargaNasiGoreng);
console.log("Harga Mie Goreng = Rp." + hargaMieGoreng);
console.log("Harga Capcay = Rp." + hargaCapcay);
console.log("Harga total =  Rp." + totalHarga);
console.log("Diskon = " + diskon + "%");
console.log("Harga setelah diskon =  Rp." + hargaSetelahDiskon);
console.log("pembayaran = Rp." + pembayaran);
console.log("Kembalian = Rp." + kembalian);
