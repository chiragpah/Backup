class ArtistService {
    static url = "http://localhost:3000/Artists";
    static async getArtistDetails() {
        // to fetch data from URL--get API
        return await axios.get(this.url);
    }
}
export default ArtistService;