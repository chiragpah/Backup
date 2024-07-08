
class EventsDetailsService {
    static url = "http://localhost:3000/Events";
    static async getEventDetails() {
        return await axios.get(this.url);
    }
    static async getEventDetailsById(id) {
        let response = await axios.get(`${this.url},${id}`)
        return response.data;
    }
}
export default EventsDetailsService;
