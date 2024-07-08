class Product{
    // getter and setter
    set ProductName(productName){
        this._productName =productName ;
    }

    set brand(brand){
        this._brand =brand ;
    }

    set price(price){
        this._price= price;
    }

    set stock(stock){
        this._stock=stock;
    }

    set desc(desc){
        this._desc =desc ;
    }

    set image(image){
        this._image=image;
    }


    // getter
    get ProductName(){
        return this._productName;
    }

    get brand(){
        return this._brand;
    }

    get price(){

        return this._price;
    }

    get stock(){
        return this._stock ;
    }
    
    get desc(){
        return this._desc;
    }
    get image(){
        return this._image ;
    }
}


export default Product;