'use strict';

module.exports.formatData = (data) =>{
    console.log('our data', data);
    // untangle the array of arrays and make the data ready to present to the user
    let revisedProds = data[2].map( (product) => {
        for(let prop in product) {
            product[prop].category = 'new thing';
            product[prop].type = 'blowy up thing';
        }
        return product;
    });
    console.log('revised', revisedProds);
};