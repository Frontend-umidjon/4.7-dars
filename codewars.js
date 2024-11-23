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
    // array sonlarni teskari qilib qaytaradigan funksiya
    function digitize(n) {
        return Array.from(String(n), Number).reverse()
    }
}