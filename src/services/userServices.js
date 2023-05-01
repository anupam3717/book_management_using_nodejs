const User=require('../model/user');
const bcrypt = require('bcrypt');

addUser=async(user)=>{
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
 
     return await new User(user).save();
}

findUser=async(user)=>{
    User.findOne({email:data});
}

module.exports = {addUser};