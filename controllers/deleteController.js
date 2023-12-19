import db from "../db.js"
import express from "express"
import alert from "alert" 
console.log("delete geldim");
const deleteProduct= async(request,response) => {
 console.log("delete girdim");
  var productId =  request.body.productId;
  console.log(productId);
  if(productId) {
    let query = `
    DELETE FROM Product WHERE productID= '${productId}';
    `; 
    db.query(query,function(err,result){
      if(err) throw err;
      console.log("product deleted")
      alert("The product is deleted from database succesfully.");
      response.redirect("http://localhost:3000/admin");
    });

  }

}
export{deleteProduct};
