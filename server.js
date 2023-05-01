require('dotenv').config();

const express= require('express');
const bodyParesr= require('body-parser');
const app= express();
const db= require('./src/database/connection');
const controller=require('./src/controller/bookController')
const router=require('./src/routes/booksRoutes')
const userRouter= require('./src/routes/userRoutes')
const userService=require('./src/services/userServices');
const middleware=require('./src/middleware/jwtVerify');
app.use(bodyParesr.json());
app.use(bodyParesr.urlencoded({extended:true}));

app.use('/user',userRouter);

app.post('/',middleware.verifyJWT,async(req,res)=>{
   
    res.send('seccess');
});

let port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});