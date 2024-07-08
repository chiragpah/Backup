class LocationService {
    static url = "http://localhost:3000/Theater"
    static async getTheaterDetails() {
        // to fetch data from URL--get API
        return await axios.get(this.url);
    }

}
export default LocationService;