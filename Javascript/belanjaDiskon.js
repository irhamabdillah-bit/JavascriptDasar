const hargaHeadset = 225000;
const hargaMouse = 150000;
const hargaKeyboard = 350000;

const totalBelanja = hargaHeadset + hargaMouse + hargaKeyboard;

const pressentaseDiskon = function (totalBelanja) {
  if (totalBelanja < 250000) {
    return 0;
  } else if (totalBelanja >= 250000 && totalBelanja <= 499999) {
    return 5;
  } else if (totalBelanja >= 500000 && totalBelanja <= 799999) {
    return 10;
  } else if (totalBelanja >= 800000) {
    return 15;
  }
};

const totalSetelahDiskon = function (totalBelanja) {
  const diskon = (pressentaseDiskon(totalBelanja) / 100) * totalBelanja;
  return totalBelanja - diskon;
};

const pembayaran = 800000;

const kembalian = function (totalSetelahBelanja) {
  const uangDibayar = 800000;
  return uangDibayar - totalSetelahBelanja;
};

console.log("$ node belanjaDiskon.js");
console.log("=== Rincian Pembelian ===");
console.log("Harga Headset = Rp. " + hargaHeadset);
console.log("Harga Mouse = Rp. " + hargaMouse);
console.log("Harga Keyboard = Rp. " + hargaKeyboard);

console.log("Total Belanja: Rp. " + totalBelanja);
console.log("Diskon: " + pressentaseDiskon(totalBelanja) + "%");
console.log("Total Setelah Diskon: Rp. " + totalSetelahDiskon(totalBelanja));
console.log("Pembayaran: Rp. " + pembayaran);
console.log("Kembalian: Rp. " + kembalian(totalSetelahDiskon(totalBelanja)));
