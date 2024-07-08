class SportService{
    static url="http://localhost:3000/sports";
    //write method to execute post API to insert record

    static async getSportDetails(){
       return await axios.get(this.url);
        
    }
    
    static async getSportDetailsById(ID){
        let response=await axios.get(`${this.url}/${ID}`);
        return response.data;
        
    }
    
}
export default SportService;