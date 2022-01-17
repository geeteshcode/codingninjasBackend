
// first(10,function(firstResult,err){
//     console.log("1",firstResult)
//       if(!err){
//           second(firstResult,function(secondResult){
//             console.log("2",secondResult);
//               if(!err){
//                   third(secondResult,function(thirdResult,err){
//                       if(!err){
//                           console.log("result",thirdResult);
//                       }
//                   })
//               }
//           })
//       }
//   })
  
//   const myPromise = new Promise((resolve,reject) => {
//       resolve(10);
//   })
  
// myPromise.then(first).then(second).then(third).then((result)=>{
//     console.log(result);
// })

//   function first(value){
//       return value+10;
//   }
  
  
//   function second(value){
//     return value+10;
//   }
  
  
//   function third(value){
//     return value+10;
//   }


// try{
//     ads("abc")
// }

// catch(err){
//     console.log("error--->",err)
// }

// finally {
//     console.log("calling finally")
// }

// function ads(data){
//     console.log(data);
// }

//   myPromise.then((d)=>{
//       console.log(d);
//   })

//   myPromise.catch((data)=>{
//       console.log(data);
//   })


function resolvefun(){
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve("Done")
        },5000)
    });
}

async function call(){
    console.log("calling");
    const result = await resolvefun();
    console.log(result);
}

call();