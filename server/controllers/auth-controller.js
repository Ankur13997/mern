const User = require("../models/user-model");
const bcrypt = require('bcryptjs');
const home = async (req, res) => {
  try {
    res.send("Welcome to my world");
  } catch (error) {
    console.log(error);
  }
};

const register = async (req, res) => {
  try {
    
    const { username, email, phone, password } = req.body;
    const userExist = await User.findOne({ email: email });
    if (userExist) return res.status(400).json({ msg: "email already exists" });

    const usercreate = await User.create({ username, email, phone, password });
    res.json({
      message: "Registration successful",
      token: await usercreate.generateToken(),
      userId: usercreate._id,
    });
  } catch (error) {
    res.json({msg:"Internal Serval Error"})
    console.log(error);
  }
};

const login = async (req,res) => {
    try {
        const {email,password} = req.body;
        const userExist = await User.findOne({email:email});
        if(!userExist)
            return res.json({ msg: "Invalid Creditentials" });

      //  const user = await bcrypt.compare(password,userExist.password);
        const user = await userExist.passcompare(password);
        if(user)
            {
                res.json({
                    message: "Login successful",
                    token: await userExist.generateToken(),
                    userId: userExist._id,
                  });
            }
        else
        return res.json({ msg: "Invalid Creditentials" });

            

    } catch (error) {
        console.log(error);
    }
}

module.exports = { home, register, login };
