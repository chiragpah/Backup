class Customer {
    set customerName(customerName) {
        this._customerName = customerName;
    }
    set email(email) {
        this._email = email;
    }
    set address(address) {
        this._address = address;
    }
    set gender(gender) {
        this._gender = gender;
    }
    set cont(contact) {
        this._cont = contact;
    }
    set date_of_birth(dob) {
        this._date_of_birth = dob;
    }
    set password(password) {
        this._password = password;

    }
    set id(id) {
        this._id = id;
    }


    get id() {
        return this._id;
    }
    get customerName() {
        return this._customerName;
    }
    get email() {
        return this._email;
    }
    get address() {
        return this._address;
    }
    get gender() {
        return this._gender;
    }
    get date_of_birth() {
        return this._date_of_birth;
    }
    get password() {
        return this._password;
    }
}
export default Customer;