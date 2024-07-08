class FoodCouponsServices{
    static url="http://localhost:3000/foodsection";
    static async GetFoodDetails(){
        return await axios.get(this.url);
    }
    static async GetFoodDetailsById(id){
        let response = await axios.get(`${this.url},${id}`);
        return response.data;
    }
}
export default FoodCouponsServices;