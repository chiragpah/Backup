
class FeedbackService
{
    static url="http://localhost:3000/feedbacks";
    //write method to execute Post API-to insert record
    static async addFeedbackDetails(feedback)
    {
        let response=await axios.post(this.url,feedback);
        return response.data;
    }
    static async getFeedbackDetails()
    {
        // to fetch data from URL--get API
        return await axios.get(this.url);
    }
    
    static async getFeedbackDetailsById(ID){
        let response=await axios.get(`${this.url}/${ID}`);
        return response.data;
        
    }
}
export default FeedbackService;