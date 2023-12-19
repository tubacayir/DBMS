import db from "../db.js"
import express from "express"
import alert from "alert"
const RegisterUser = async(request,response) => {
var username = request.body.username;
console.log(username);
var password = request.body.pswd;
console.log(password);
var firstname = request.body.firstname;
console.log(firstname);
var surname = request.body.surname;
console.log(surname);
var mobilePhone = request.body.mobilePhone;
console.log(mobilePhone);

if(password && username&& firstname&&surname&&mobilePhone){
  let queryToUser = `
  INSERT INTO User
    (userName, firstName, surname, userMobilePhone) 
    VALUES 
    ('${username}', '${firstname}', '${surname}', '${mobilePhone}');
  `; 
   let userIdsql = ` SELECT userID FROM User WHERE userName = "${username}"
   `; 
   db.query(queryToUser,function(err,result){
    if(err) throw err;
    console.log("user eklendiii")
  });
  db.query(userIdsql, function(err,userIdFromUser){
    console.log(userIdFromUser);
    let queryToPassword = `
    INSERT INTO Password
      (userId,password)  
      VALUES 
      ('${userIdFromUser[0].userID}','${password}');
    `;
    db.query(queryToPassword,function(err,result){
      if(err) throw err;
      console.log("password eklendiii")
    });
  });

  alert("You have registered succesfully. Please login now.") 
  response.redirect("http://localhost:3000/login");
}

};


 export{RegisterUser};