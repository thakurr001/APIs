// function getData(dataId) {
//     setTimeout(() => {
//         console.log("data" ,dataId);
//     },2000);
// }
// getData(1);
// getData(2);
// getData(3);




// function getData(dataId, getNextData) {
//     setTimeout(() => {
//         console.log("data", dataId);
//         if (getNextData) {
//             getNextData();
//         }
//     }, 2000);
// }
// getData(1,()=> {
//     getData(2);
// });




//   Call back functions, callback hell, nested callbacks, pyramid of doom
// function getData(dataId, getNextData) {
//         setTimeout(() => {
//             console.log("data", dataId);
//             if (getNextData) {
//                 getNextData();
//             }
//         }, 2000);
//     }
// getData(1, () => {
//         console.log("getting data 2.....");
//         getData(2, () => {
//             getData(3, () => {
//                 getData(4);
//             });
//         });
//     });




// promises
// let promise = new Promise((resolve, reject) => {
//     console.log("I am a Promise");
//     // resolve(123);
//     reject("some error occured");
// });



// const getPromise = () => {
//    return new Promise((resolve, reject) => {
//         console.log("I am a Promise");
//        // resolve("success");
//        reject("error");
//     });
// };
// let promise = getPromise();
// promise.then(() => {
//     console.log("Promise fulfilled");
// });
// promise.catch(() => {
//     console.log("rejected");
// });

    

 function asyncFunc  () {
     return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("some data1");
            resolve("success");
        }, 3000);
     });
}
console.log("fetching data....");
let p1 = asyncFunc();
p1.then((res) => {
    console.log(res);
});
    
    
    




