// UY ishi
 

// 1-masala

 {
//     //for ni ishlatgan holda


    let a = 1
    let b = 10
 let arr =[]
function evenToBig() {
    for (let i = a; i <= b; i++) {
        if (i % 2 == 0) {
            arr.push(i)
        }
    }

}


// recursive ni ishlatgan holda


// let i = a
// function recursive (){
//     i++
//     if (i <= b){
//         if (i % 2 == 0) {
//             arr.push(i)
//         }
//         recursive()
//     }
// }

// recursive()

    evenToBig()
    console.log(arr);
 }

// 2-masala

{
    // for ni ishlatgan holda


    let a = 100
    let arr = []
        // for (let i = 0; i <= a; i+=10) {
        //     if (i % 10 === 0 && i !== 0) {
        //         arr.push(i)
        //     }
        // }

    // recursive ni ishlatgan holda

    let i = 0
    function recursive() {
        i+=10
        if (i <= a) {
            if (i % 10 === 0 && i !== 0) {
                arr.push(i)
            }
            recursive()
        }
    }
    recursive()
    console.log(arr);
}

// 3-masala

{
//  for ni ishlatgan holda

 let a = 5
 let arr = []

//  for (let i = 1; i <= a; i++) {
//     arr.push(i ** 2)
//  }

//  recursive ni ishlatgan holda

 let i = 0
 function recursive() {
     i++
     if (i <= a) {
         arr.push(i ** 2)
         recursive()
     }
 }
 recursive()

 console.log(arr);
 

}

// 4-masala

{
    function foo(n){
        return +n.split('').sort().join('')
    
    }
    console.log(foo("2541"));//1245
    console.log(foo("312"));//123
}

// 5-masala

{
   function removeQmark(str){
       return str.split("").filter(qmark => qmark !== "?").join("")
   }

   console.log(removeQmark("abc?"));
   


}

// 6-masala

{
    let a = 5
    let arr = []

    // for ni ishlatgan holda

    // for (let i = 1; i <= a;i++) {
    //     arr.push(a)
        
    // }

    // recursive ni ishlatgan holda

    let i = 0
    function recursive() {
        i++
        if (i <= a) {
            arr.push(a)
            recursive()
        }
    }
    recursive()
     console.log(arr);
     

}

// 7-masala

{
    function booleanCheck(str){
        return Boolean(str)
    }

    console.log(booleanCheck(""));
    
}


