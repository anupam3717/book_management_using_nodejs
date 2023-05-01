require('dotenv').config();
const jwt = require("jsonwebtoken");
const verifyJWT = (req, res, next) => {
    // const authHeader = req.headers.authorization || req.headers.Authorization;
    // if (!authHeader?.startsWith("Bearer "))
    //     return res.sendStatus(401);
    const bearerHeader=req.headers['authorization']
    if(bearerHeader!==undefined){
       
        const accessToken = req.headers["authorization"].split(" ")[1];
        jwt.verify(
            accessToken,
            process.env.SECRET,
            (err, decoded) => {
                if (err)
                    return res.sendStatus(403); //Forbidden
                req.verifyUser=decoded;
                console.log(req.verifyUser);
                // req.username = decoded["UserInfo"].username;
                // req.roles = decoded["UserInfo"].roles; //adding role to request for authorization in verifyRoles.
                next();
            });
    }
   
    //verifying access token
   
}
module.exports = { verifyJWT };