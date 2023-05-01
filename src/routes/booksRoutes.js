const express=require('express');
const router=express.Router();
const bookController=require('../controller/bookController');

router.post('/',bookController.postController);

module.exports=router;