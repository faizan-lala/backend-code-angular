const express=require('express');
const bodyParser=require('body-parser');
const path = require('path');
const adminRoute=require('./route/admin.route');
const cartRoute=require('./route/cart.route');
const orderRoute=require('./route/order.route');
const categoryRoute=require('./route/category.route');
const productRoute=require('./route/product.route');
const userRoute=require('./route/user.route');
// const subcategoryRoute=require('./route/sub-caregory.route');
const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://root:root@cluster0.jvz7u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
mongoose.Promise = global.Promise;
const port=process.env.PORT || 3000 ;
const app=express();
const cors = require('cors');
app.use(cors());

app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/cart',cartRoute);
app.use('/order',orderRoute);
app.use('/category',categoryRoute);
app.use('/product',productRoute);
app.use('/user',userRoute);
app.use('/admin',adminRoute);
// app.use('/sub-category',subcategoryRoute);

app.listen(port,()=>{
    console.log('server is running');
});

