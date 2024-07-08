class CustomerService {
    static url = "http://localhost:3000/customer";
    static async addCustomerDetails(customer) {
        //post API --to insert a record
        return await axios.post(this.url, customer);
    }

    static async getCustomerDetails() {
        // to fetch data from URL--get API
        return await axios.get(this.url);
    }

}
export default CustomerService;