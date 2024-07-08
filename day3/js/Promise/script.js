// console.log("!!EXceution start")
// // synchronous manner
// function abc(){
//     console.log("abc function");
// }

// function xyz(func){
//     console.log("xyz func!");
//     func()
// }

// xyz(abc) //callback func
// console.log("!Execution Stop");

// console.log("!!EXceution start")
// // asynchronous manner
// function abc(){
//     console.log("abc function");
// }

// // SetTimeout(callback,time)
// setTimeout(()=>
// {
//     console.log("in settimeout");
//     abc();
// },4000)

// console.log("!!!Execution start");
// // asynchronous behavious
// function getMsg(){
//     console.log("In getMessage");
//     setTimeout(()=>{
//         let msg="Welcome to Cybage!";
//         return msg;
//     },5000);
    
// }
// let msg=getMsg();
// console.log("Message",msg);
// console.log("Executinon End!!")

console.log("!!!Execution start");
// asynchronous behavious
function getMsg(){
    // promise object created 
    // we use promise to handle delayed part the data which we are going to get after some time
    let p=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let msg="Welcome Cybage!!";
            resolve("kalyani "+ msg);
        },5000);
        // this function is returns the promise
   

    })
    return p;   
    
}
// to handle the promise we have then and catch
// getMsg().then((result)=>{
//                  console.log("Message",result);
//                  console.log("Executinon End!!")
// }).
// catch(error=>console.log("Error:",error));



// to handle the promise using await and async
async function process(){
    //wait wait for result
    let msg= await getMsg();
    console.log(msg)
}

process()