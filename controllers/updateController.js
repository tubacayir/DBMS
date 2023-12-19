import db from "../db.js"
import express from "express"
const updateProduct= async(request, response) => {
  console.log("update girdim");
  var productId =  request.body.productId;
  var productSize = request.body.productSize;
  var productColor = request.body.productColor;
  if(productId&&productColor&&productSize) {
    let query = `
    UPDATE Product 
    SET ProductColor='${productColor}' , productSize= '${productSize}'
    WHERE productID=${productId} ; 
    `; 
    db.query(query,function(err,result){
      if(err) throw err;
      response.redirect("http://localhost:3000/admin");
    });

  }
  
}

export{updateProduct}