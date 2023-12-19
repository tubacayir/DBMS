import db from "../db.js"
import express from "express"
const getCustomers = async(request,response) => {
var category = NaN;
        let query = `
        SELECT *
        FROM User
        `;

        db.query(query, function(error, data){
          response.render('getCustomer', {
            data,
          });
        });
    
}

export{getCustomers};
