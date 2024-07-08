// console.log("!!!Execution start");
// function abc() {
//     console.log("abc");
// }
// function xyz(func) {
//     console.log("xyz");
//     func();
// }
// xyz(abc);
// console.log("End");

// console.log("start");
// function abc() {
//     console.log("abc function");
// }





// //setTimeOut(callback, time)

// setTimeout(() => {
//     console.log("In setTimeOut function");
//     abc();
// }, 4000);
// console.log("End");


// console.log("Execution Start!!");
// function get_msg() {
//     console.log("In msg function");
//     setTimeout(() => {
//         let msg = "Cybage Software Private LTD.";
//         return msg;
//     }, 5000);
// }
// let mesg = get_msg();
// console.log("Message:", mesg);
// console.log("!Execution End");






// let promise = new Promise((resolve, reject) => {
//     let val = true;
//     if (val) {
//         resolve("Process Executed")
//     }
//     else {
//         reject("Failed")
//     }
// })
// promise.then((response) => {
//     console.log("In Section:", response);
// }).catch((error) => { console.log("In Catch Section:", error); })



// promise.then((response) => {
//     console.log("In Section:", response);
// }, (reject) => {
//     console.log("In Section:", reject);
// });




function get_message() {
    console.log("In message fun");
    let p = new Promise((resolve, reject) => {
        setTimeout(() => {
            let msg = "Cybage Software PVT LTD"
            reject("Company:" + msg)
        }, 5000)
    })
    return p;

}
get_message().then((result) => { console.log("Message:", result); })//, (err) => { console.log("Error1", err);
    .catch((error) => { console.log("Error2", error); })



