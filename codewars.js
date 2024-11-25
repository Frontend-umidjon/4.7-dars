// Codewars

// 1-masala

{
    // kiritilgan yilga qarab qaysi asr ekanligini aniqlaydigan funksiya 
    function century(year) {
        return Math.ceil(year / 100)
      }
}

// 2-masala

{
    // kiritilgan arrayni barcha sonlarini 2 ga ko'paytirib qaytaradigan funksiya
    function maps(x){
        return x.map(i => i * 2)
    }
}

// 3-masala

{
    // raqamni  teskari array qilib qaytaradigan funksiya
    function digitize(n) {
        return Array.from(String(n), Number).reverse()
    }
}

// 4-masala

{
// bu masalada bir odam soatiga 0.5 litr suv ichar ekan funksiyada soat kiritilsa shu vaqtni ichida qancha suv ichganini butun aniqlaydigan funksiya
function litres(time) {
    return Math.floor(0.5 * time)
  }
}

// 5-masala

{
    // ikkita kiritilgan qiymatlar ustidan odiiy matematik amallar bajaradigan funksiya

    function basicOp(operation, value1, value2){
        if (operation === "+"){
           return value1  + value2
        }else if (operation === "-"){
          return value1 - value2
        }else if (operation === "*"){
          return value1 * value2
        }
        else if (operation === "/"){
          return value1 / value2
        }
      }
}

// 6-masala

{
    // boolean qiyamtlarni stringa o'giradigan funksiya

    function booleanToString(b){
        return b.toString();
       }
}