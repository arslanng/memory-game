# Hafıza Oyunu Uygulaması

Bu proje `Furkan Lebit` tarafından oluşturulan [suffergame](https://github.com/furkanlebit7/kodluyoruzilkrepo/tree/main/REDUX/suffergame) uygulanasının klonudur. Eğitim amaçlı kullanılmıştır.

## Kullanılan teknoloji `npm`

- Uygulama react üzerine geliştirilmiştir.
- Uygulamada veri kontrolü için  `redux` kullanıldı.
- Stil düzenleme için `styled-components` kullanıldı.
- Logolar için ise `react-icons` kullanıldı.

## Kullanılan Verinin Düzenlenmesi

- Data/data.js içinde `https://github.com/samiheikki/javascript-guessing-game/tree/master/static/logos` adresindeki dosya adları ile eşleşen bir array oluşturuldu. duplike edildi ve random yerleştirildi. Bu array elemanları randomize edildi ve obje haline getirilip id eklendi.

- Redux yapısı oluşturuldu. Datadan gelen veri bu yapıya yerleştirildi.

## Oyunun kontrol edilmesi

- Kartın açılma animasyonu, açılan kartın tekrar tıklanmasını engelleme ve 2 kart açık ve kontrol edilirken diğer kartların tıklananamsı işlemi `cards.style.js` içindeki stil tanımlarıyla yapıldı.

- Açılan kartlar `useState` ile oluşturulan bir array içinde tutulur. Eleman sayısı 2 olunca elemanlar karşılaştırılır. Elemanlar aynı ise her ikisinde de `isOpen: true` olur. 

- Doğru açılan kartların idleri redux tarafında bir arrayde tutulur. Bu arrayin eleman sayısı toplam cards değerinin eleman sayısına eşit ise `isFinished: true`olur.
