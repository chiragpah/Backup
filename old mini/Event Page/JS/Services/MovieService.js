class MovieService{
    static url="http://localhost:3000/Movies";
    //write method to execute post API to insert record

    static async getMovieDetails(){
       return await axios.get(this.url);
        
    }
    
    static async getMovieDetailsById(ID){
        let response=await axios.get(`${this.url}/${ID}`);
        return response.data;
        
    }
    
}
export default MovieService;