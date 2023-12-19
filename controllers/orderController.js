import db from "../db.js"
import express from "express"
import alert from "alert"; 
const giveOrders = async(request,response) => {
  console.log("ordera geldim")
  var username = request.body.username;
  console.log(username)
  var orderType = request.body.orderType;
  console.log(orderType)
  var adress = request.body.adress;

  var pad = function(num) { return ('00'+num).slice(-2) };
var date;
date = new Date();
date = date.getUTCFullYear()         + '-' +
        pad(date.getUTCMonth() + 1)  + '-' +
        pad(date.getUTCDate())       + ' ' +
        pad(date.getUTCHours())      + ':' +
        pad(date.getUTCMinutes())    + ':' +
        pad(date.getUTCSeconds());
  if(username&&adress){
    let queryToOrder = `
    INSERT INTO Orders 
      ( orderDescription, orderDate, employeeID,isReturn,orderType) 
      VALUES 
      ('This is order with orderID', '${date}' , '1', 'false' ,'${orderType}');
    `; 
    let userIdsql = ` SELECT userID FROM User WHERE userName = "${username}"
    `; 


     db.query(queryToOrder,function(err,result){
      if(err) throw err;
      console.log("order eklendiii")
    });
    
    db.query(userIdsql, function(err,userIdFromUser){
      console.log(userIdFromUser);
      if(userIdFromUser.length>0){
      let queryToAdress = `
      INSERT INTO Address
        (userID, adress, PostalCode) 
        VALUES 
        ('${userIdFromUser[0].userID}', '${adress}' , '34');
      `; 
      db.query(queryToAdress,function(err,result){
        if(err) throw err;
        console.log("adresss eklendiii")
      });
      alert("Your order is completed");
      response.redirect("http://localhost:3000");

      }
      else{
          alert("There is no user with given user name");
      }
    });
   
  }
  
  };

  export{giveOrders};