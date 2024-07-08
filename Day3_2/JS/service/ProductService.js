class ProductService {
    //write method to execute post api to insert record
    static url = "http://localhost:3000/products";
    static async addProductDetails(product) {
        console.log("hfdgd");
        return await axios.post(this.url, product);
    }
    static async getProductDetails() {
        // to fetch data from URL--get API
        return await axios.get(this.url);
    }
    static async deleteProductDetails(id) {
        return await axios.delete(this.url + "/" + id)
    }

    static async getProductDetailsById() {
        let response = await axios.get(this.url);
        return response.data;
    }
    static async editProductDetails(id, data) {
        let response = await axios.put(this.url + "/" + id, data);
        return response.data;
    }
}
export default ProductService;