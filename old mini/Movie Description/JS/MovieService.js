class MovieService {
    static url = "http://localhost:3000/Movies";
    static async getMovieDetails(id) {
        // to fetch data from URL--get API
        return await axios.get(this.url + '/' + id);
    }
}
export default MovieService;