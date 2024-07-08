// Promise take 1 para as a callback fun and this callback takes 2 para 1 resolev and 1 reject
let promise=new Promise((resolve,reject)=>{
    let val=true ;
// if success then resolev func will get call
    if(val){
          
            resolve("Process Executed Sucessfully!");
    }
    else{

          reject("Process Unsucessfull!");

    }

})
// then() will take callback parameter
promise.then((response)=>{
  console.log("My Response:",response);
}
).catch((error)=>{
    console.log("my Msg:",response);

})


// to handle this resolve and reject
// then catch async await

