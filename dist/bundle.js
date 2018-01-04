(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
// format the data from XHR requests



module.exports.getCategories = () => {
    return new Promise((resolve,reject) => {
        $.ajax({
            url:'../data/categories.json'
        })
        .done( (cats) =>{
            resolve(cats.categories);
        })
        .fail( (error) => {
            reject(error);
        });
    });
};


module.exports.getProducts = () => {
    return new Promise((resolve,reject) => {
        $.ajax({
            url:'../data/products.json'
        })
        .done( (prods) =>{
            resolve(prods.products);
        })
        .fail( (error) => {
            reject(error);
        });
    });
};


module.exports.getTypes = () => {
    return new Promise((resolve,reject) => {
        $.ajax({
            url:'../data/types.json'
        })
        .done( (types) =>{
            resolve(types.types);
        })
        .fail( (error) => {
            reject(error);
        });
    });
};


},{}],2:[function(require,module,exports){
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
},{}],3:[function(require,module,exports){
"use strict";

const factory = require('./factory');
const format = require('./formatter');
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
    format.formatData(dataArr);
})
.catch((err) =>{
    console.log(err);
});


// UI interface w/dropdown

// Grab the selected value

// Make XHR Request(s) for data



// Display data to the user




},{"./factory":1,"./formatter":2}]},{},[3]);
