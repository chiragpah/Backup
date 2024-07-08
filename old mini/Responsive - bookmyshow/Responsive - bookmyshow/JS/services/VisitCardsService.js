
class CardsService{
    static url="http://localhost:3000/Visitmovies";
static async getCardDetails(){
 return await axios.get(this.url);
}
static async getCardDetailsById(id){
   let response = await axios.get(`${this.url},${id}`)
    return response.data;
} 
}
export default CardsService;
