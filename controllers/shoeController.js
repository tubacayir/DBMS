import db from "../db.js"
import express from "express"
const getProducts = async(request,response) => {
var category = NaN;
        let query = `
        SELECT *
        FROM Product LIMIT 30
         
        `;

        db.query(query, function(error, data){
          response.render('index', {
            data,
          });
        });
    
}

const getProductsForAdmin = async(request,response) => {
  var category = NaN;
          let query = `
          SELECT *
          FROM Product LIMIT 30
           
          `;
  
          db.query(query, function(error, data){
           // console.log(data);
            response.render('admin', {
              data,
            });
          });
      
  }
const getCategories = async(request,response) => {
  var category = request.params.ct;
  let query = `
  SELECT *
  FROM Product 
  WHERE categoryID = ${category} LIMIT 30;
  `;
  
          db.query(query, function(error, data){
           // console.log(data);
            response.render('index', {
              data,
            });
          });
      
  }

  const getCategoriesForAdmin = async(request,response) => {
    var category = request.params.ct;
    let query = `
    SELECT *
    FROM Product 
    WHERE categoryID = ${category} LIMIT 30;
    `;
    
            db.query(query, function(error, data){
              //console.log(data);
              response.render('admin', {
                data,
              });
            });
        
    }

   
    

export{getProducts,getCategories,getCategoriesForAdmin,getProductsForAdmin};