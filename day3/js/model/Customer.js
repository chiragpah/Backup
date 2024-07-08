//  export so we can get this data from anywhere which is imported
//  export 

// model folder is storing all the data for temporary purpose
 class Customer
{
    set customerName(cust_name){
    // private varible use underscore
         this._cust_name =cust_name;
    }

    set email(email){
        this._email=email ;
    }
    set address(address){
        this._address =address ;
    }

    set gender(gender){
        this._gender=gender;
    }

    set DOB(dob){
        this._dob=dob ;
    }
    set password(password){
        this._password =password ;
    }

    set contact(contact){
        this._contact =contact;
    }


    set id(id){
        this._id =id ;
    }

    get customerName(){
        return this._cust_name;
        
    }
    get email(){
        return this._email;
    }
    get address(){
         return this._address;
    }
    
    get gender(){
        return this._gender;
        
    }
    get contact(){
        return this._contact;
    }
    get id(){
         return this._id;
    }
    get dob(){
        return this._dob;
    }
}

export default Customer;