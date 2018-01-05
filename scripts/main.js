"use strict";
const $ = require('jquery');
const factory = require('./factory');
const format = require('./formatter');
const prodView = require('./prodView');
// const acmeData = [];

// factory.getCategories()
// .then( (categories) => {
//     console.log(categories);
//     // added cats to empty array
//     acmeData.push(categories);
//     return factory.getTypes();
// })
// .then( (types) =>{
//     console.log(types);
//     // added types to empty array
//     acmeData.push(types);
//     return factory.getProducts();
// })
// .then( (products) =>{
//     // added products to empty array
//     acmeData.push(products);
//     console.log(products);
//     // logged array that has cats, types, and prods in an array. an array of all the arrays
//     console.log(acmeData);
// })
// .catch( (err) => {
//     console.log(`there was a problem: ${err.status} ${err.statusText}`);
// });

let promArr = [
    factory.getCategories(),
    factory.getTypes(), 
    factory.getProducts()
];

Promise.all(promArr)
.then( (dataArr) =>{
   let revisedProducts = format.formatData(dataArr);
   prodView.displayProduct(revisedProducts);
})
.catch((err) =>{
    console.log(err);
});


// UI interface w/dropdown

// Grab the selected value

// Make XHR Request(s) for data



// Display data to the user



