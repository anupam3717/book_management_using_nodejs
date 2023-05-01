const User=require('../model/user')

addUser= async(req,res)=>{
      const salt = await bcrypt.genSalt(10);
      const user=req.body;
      user.password = await bcrypt.hash(user.password, salt);
   
      await new User(user).save();
}

findUser=async()