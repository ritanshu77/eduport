const express=require("express");

const router=express.Router();

const controller=require("../controller/constroller");

router.get("/",controller.HomePage);

module.exports=router;