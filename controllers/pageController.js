const getIndexPage = (req,res) => {
  res.render('index');
};
const getLoginPage = (req,res) => {
  res.render('login');
};
const getRegisterPage = (req, res)=>{
  res.render('register');
}
const getOrderPage = (req, res)=>{
  var productId = req.params.prdct
  res.render('order');
}
const getDeletePage = (req, res) => {
  res.render('productDelete');
}
const getUpdatePage = (req, res)=>{
  res.render('updateProduct');
}
const getCustomer = (req, res)=>{
  res.render('getCustomer');
}

export{getIndexPage,getLoginPage,getRegisterPage, getOrderPage,getDeletePage,getUpdatePage,getCustomer};