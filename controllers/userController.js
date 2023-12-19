import db from "../db.js"
import express from "express"
import alert from "alert"
const loginUser = async(request,response) => {
    var username = request.body.username;
    var password = request.body.password;

    if(password && username)
    {
        let query = `
        SELECT User.userName, Password.password FROM User
        inner join Password on User.userID = Password.userID 
        WHERE userName = "${username}"
        `;
        
        db.query(query, function(error, data){
            console.log(data);
            if(data.length > 0)
            {
                for(var count = 0; count < data.length; count++)
                {
                    if(data[count].password == password)
                    {
                        console.log(request.session)
                     //   request.session.user_id = data[count].userID;
                     response.redirect("http://localhost:3000");
                    }
                    else
                    {
                        alert("Incorrect password.")
                    }
                }
            }
            else
            {
                alert("There is no user. Please register first.")
            }
            //response.end();
        });
    }
    else
    {
        alert("Please enter userName and Password Details");
        //response.end();
    
    }
}
    const loginEmployee = async(request,response) => {
        var employeeName = request.body.employeeName;
        var  employeeId= request.body.employeeId;
         console.log(employeeName,employeeId);
        if( employeeName && employeeId)
        {
            let query1 = `
            SELECT employeeName ,employeeID FROM Employee
            WHERE employeeID = "${employeeId}"
            `;
            console.log("guery passed")
            db.query(query1, function(error, data){
                console.log(data);
                if(data.length > 0)
                {
                    for(var count = 0; count < data.length; count++)
                    {
                        if(data[count].employeeName == employeeName)
                        {
                            response.redirect("http://localhost:3000/admin");
                        }
                        else
                        {
                            alert("Incorrect employee name.")
                        }
                    }
                }
                else{
                alert("Please enter valid Employee")
            //    response.end();
                }
            });
        }
        else
        {
            alert('Please enter Employee Details!!');
       //     response.end();
      
};
    }
    

export{loginUser,loginEmployee};