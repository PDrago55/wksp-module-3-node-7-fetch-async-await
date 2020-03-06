// Exercise 2
// let x = 0;
// const test = async () => {
//     let promise = new Promise((resolve, reject) => {
//     if (x <= 2) {
//         x++;
//         setTimeout(() => resolve("worked"), 2000)
//     }
//     let result = await promise;
//     console.log(result, "-----------")
// })
// }
// test()

/// recieve error that I cannot use an 'await' method if 
//it isn't an async function



//PART 2
const addPromise = async (num) => {
    const a =  await test(10)
    const b = await test(20)
    const c = await test(30)

    const total = num + a + b + c 
    console.log(total, "-----------")
    return total
}

addPromise(10).then((sum) => {
    console.log(sum);
});

// function addPromise(num){
//     return new Promise(resolve => {
//         doubleAfter2Seconds(num)
//             .then((a) => {
//                 doubleAfter2Seconds(20)
//                     .then((b) => {
//                         doubleAfter2Seconds(30).then((c) => {
//                             resolve(x + a + b + c);
//                         })
//                 })
//         })
//     });
// }

// const test = async (num) => {
//     let x = await addPromise(num);
//     console.log(x, "---------")
// }


// test(10)