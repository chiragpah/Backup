
class ProductService
{
    static url="http://localhost:3000/feedbacks";
    //write method to execute Post API-to insert record
    static async addProductDetails(product)
    {
        let response=await axios.post(this.url,product);
        return response.data;
    }
    static async getProductDetails()
    {
        // to fetch data from URL--get API
        return await axios.get(this.url);
    }
    
    static async getMovieDetailsById(ID){
        let response=await axios.get(`${this.url}/${ID}`);
        return response.data;
        
    }
}
export default ProductService;