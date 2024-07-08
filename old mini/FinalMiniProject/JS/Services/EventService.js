class EventService{
    static url="http://localhost:3000/Events";
    //write method to execute post API to insert record

    static async getEventDetails(){
       return await axios.get(this.url);
        
    }
    
    static async getEventDetailsById(ID){
        let response=await axios.get(`${this.url}/${ID}`);
        return response.data;
        
    }
    
}
export default EventService;