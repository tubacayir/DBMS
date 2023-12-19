import { createRequire } from "module";
const require = createRequire(import.meta.url);
import express from "express"
import session from "express-session"
import db from "./db.js"//const pageRoutes = require('./routes/pageRoutes.js');
import pageRoutes from "./routes/pageRoutes.js" ;
import userRoutes from "./routes/userRoutes.js";
import registerRoutes from "./routes/registerRoutes.js"
import orderRoutes from "./routes/orderRoutes.js"
import getDeletePage from "./routes/deleteRoutes.js";
import  getUpdatePage  from "./routes/updateRoutes.js";
//import  getCustomers  from "./routes/getCustomerRoutes.js";

const app = express();
const port = 3000;




// Router 
app.set(`view engine`, `ejs`);
app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/', pageRoutes);
app.use('/login',userRoutes);
app.use('/register',registerRoutes);
app.use('/admin', pageRoutes);
app.use('/order', orderRoutes);
app.use('/productDelete',getDeletePage);
app.use('/updateProduct',getUpdatePage);
//app.use('/viewCustomers',getCustomers);


app.use(session({
  secret : 'webslesson',
  resave : false,
  saveUninitialized: true
}));


app.listen(port, () => {
  console.log(`app running on port : ${port}`);
});