const bcryptjs = require("bcryptjs");
const User = require("../model/UserScheme");

const signupController = async (req, res) => {
  const {username , email ,number ,work , password }= req.body
    if( !username || !email || !number || !work || !password ){
        return res.status(422).json({error : "please fill all feild"})
    }

    const hashPass =await bcryptjs.hash(password, 10);

        const userObj = {
            ...req.body,
            password: hashPass,

          };


        User.findOne({email:email},(error , users)=>{
            if(error){
                res.send(error);
            }
            else if (users) {
                res.status(422).json({ message: "email address is already exist" });
            } 
           else{
                User.create(userObj , (err , _)=>{
                if (err) {
                    res.send(err);
                  } else {
                    res.status(201).send({ message: "user successfully Registered" })
                      
                }
            })
           }
        })

};

module.exports = signupController;