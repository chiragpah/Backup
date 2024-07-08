class ProductService{
    // you can call this method without creating obj of class
    static url = "http://localhost:3000/products";

    // we have to call this function by class name so we wrote as static

    static  async addProductDetails(product){
        // insert the record we can use post()

        // let url="http://localhost:3000/customers"
        // let res=await axios.post(url,customer);

        // result from service
        // console.log(res);

        return await axios.post(this.url ,product);

    }

    static async getProductDetails(){
        // to fetch data from API
        return await axios.get(this.url);
    }

    static async deleteProductDetails(id){
        // for deleting data
        return await axios.delete(`${this.url}/${id}`);
    }

    static async updateProductDetails(id, data) {
        try {
            const response = await axios.put(this.url + '/' + '1', data);
            alert(response)
            return response;
        
        } catch (error) {
            alert(error)
            console.error('Error updating product details:', error);
            throw error;
        }
    }
    


}
export default ProductService;