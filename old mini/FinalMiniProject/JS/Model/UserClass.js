class UserClass {
    set userId(userId) {
        this._userId = userId;
    }
    set userFullName(userFullName) {
        this._userFullName = userFullName;
    }
    set userPassword(userPassword) {
        this._userPassword = userPassword;
    }
    // set userEmail(userEmail) {
    //     this._userEmail = userEmail;
    // }
    set userFavArtist(userFavArtist) {
        this._userFavArtist = userFavArtist;
    }
    set userFavCategory(userFavCategory) {
        this._userFavCategory = userFavCategory;
    }
    set userContact(userContact) {
        this._userContact = userContact;
    }
    set id(id) {
        this._id = id;
    }


    get id() {
        return this._id;
    }
    get userId() {
        return this._userId;
    }
    get userFullName() {
        return this._userFullName;
    }
    get userPassword() {
        return this._userPassword;
    }
    
    get userFavArtist() {
        return this._userFavArtist;
    }
    get userFavCategory() {
        return this._userFavCategory;
    }
   
    get userContact(){
        return this._userContact;
    }
}
export default UserClass;