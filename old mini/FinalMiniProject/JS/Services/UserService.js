class UserService {
    static url = "http://localhost:3000/UserInfo";
    static async addUserDetails(userDetail) {
        //post API --to insert a record
        return await axios.post(this.url, userDetail);
    }
    static async getUserDetails() {
        return await axios.get(this.url);


    }

}
export default UserService;