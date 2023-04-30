const express= require('express');
const bodyParesr= require('body-parser');
const app= express();
require('dotenv').config();
console(process.env)

app.use(bodyParesr.json());
app.use(bodyParesr.urlencoded({extended:true}));

app.get('/', (req, res) => {
    res.json({"message": "Server is running :D"});
});

let PORT = 8080

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});