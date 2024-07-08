function getEmployeeDetails(){

    return new Promise((resolve,reject)=>{
        // fetch() used to fetch data
        fetch("http://localhost:3000/employee")
        .then((result)=>{
            resolve(result.json());
        })
        .catch((error)=>{
            reject(error);
        })
        // console.log(res);
    });
    
   
}

async function solution(){
    let res=await getEmployeeDetails()
    console.log(res);
}
solution()