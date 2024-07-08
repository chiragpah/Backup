
class CardsService {
    static url = "http://localhost:3000/Movies";
    static async getCardDetails() {
        return await axios.get(this.url);
    }
    static async getCardDetailsById(id) {
        return await axios.get(`${this.url},${id}`)
        // return response.data;
        // let response = 
    }
}
export default CardsService;
