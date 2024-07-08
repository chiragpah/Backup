class Product {
    set productName(pName) {
        this._productName = pName;
    }
    set brandName(bName) {
        this._brandName = bName;
    }
   
    set productDescription(des) {
        this._productDescription = des;
    }
    set productAvailablity(avail) {
        this._productAvailablity = avail;
    }
    set productPrice(p) {
        this._productPrice = p;
    }
    set productType(f) {
        this._productType = f;
    }

    get productName() {
        return this._productName;
    }
    get brandName() {
        return this._brandName;
    }
   
    get productDescription() {
        return this._productDescription;
    }
    get productAvailablity() {
        return this._productAvailablity;
    }
    get productPrice() {
        return this._productPrice;
    }
    get productType() {
        return this._productType;
    }
}
export default Product;