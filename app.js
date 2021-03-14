
let fs=require('fs');// Dosya islemleri icin fs paketini cagirdim.
console.log(fs); // fs paketinin iceriginde neler var gormek icin ekrana yazdirdim.

// Okuma islemini fs'nin altinda readFile cagirarak yaptim. Burada ikinci parametre olarak
// geriye hata varsa hatayi yoksa datayi yazdiran bir fonksiyon tanimladim.
fs.readFile('./docs/Dosya.txt', (err, data) => {
    if (err) 
        throw err
    console.log(data); // Burada dosyamiz okunmadan once datanin saklanidig gecici bellek olan
                       // Buffer da bekletiliyor. Datayi okumak icin toStringe cevirmemiz gerekiyor.
    console.log(data.toString());
})

// Burada datayi toString yapmak yerine readFile da ikinci parametre olarak 'UTF-8' yaparsak direk datayi okumus oluruz.
