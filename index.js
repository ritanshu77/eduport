const express = require("express");

const app=express();

const path=require("path");

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const staticPath=path.join(__dirname,"/public");

app.use(express.static(staticPath));

app.set("view engine","ejs");
app.set('views',path.join(__dirname,'src/admin/views'));

const router=require("./src/admin/router/router");
app.use("/",router);

app.listen(443,()=>{
    console.log(`server start on port 443..`)
})
