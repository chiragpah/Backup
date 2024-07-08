class CustomerService{
    // you can call this method without creating obj of class
    static url = "http://localhost:3000/customers";

    static  async addCustomerDetails(customer){
        // insert the record we can use post()

        // let url="http://localhost:3000/customers"
        // let res=await axios.post(url,customer);

        // result from service
        // console.log(res);

        return await axios.post(this.url ,customer);

    }

    static async getCustomerDetails(){
        // to fetch data from API
        return await axios.get(this.url);
    }

}
export default CustomerService