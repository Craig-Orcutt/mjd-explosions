'use strict';
const $ = require('jquery');

module.exports.formatData = data =>{
    console.log('our data', data);
    const products = data[2];
    const types = data[1];
    const cats = data[0];
    // untangle the array of arrays and make the data ready to present to the user
    let revisedProds = products.map(prod => {
        // placesn the keys of nested objects into an array?
        let currentProd = Object.keys(prod)[0];
        // finds types that match up to the current type and the id of the type?
        let prodType = types.find(type => type.id === prod[currentProd].type);
        console.log('prodFind',prodType); 
        let productCat = cats.find(category => category.id === prodType.category);
        
        prod[currentProd].type = prodType.name;
        prod[currentProd].category = productCat.name;

        return prod;
    });
    console.log('revised', revisedProds);
    return revisedProds;
};