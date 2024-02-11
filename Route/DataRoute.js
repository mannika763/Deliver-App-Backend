const express = require("express");
const router = express.Router();
const shopModel = require("../Models/shop");
const UserModel = require("../Models/User")

router.get('/getData', async (req, res) => {
    // console.log("ccccccccccc")
  try {
    const data = await shopModel.find({});  
    res.send(data);
  } catch (err) {
    res.json({ message: err });    
  }
}); 

router.post("/sendData", async (req, res) => {
  const { name, email, password } = req.body;
  console.log(name, email, password );
  try{
    UserModel.insertMany({name, email, password})
  }
catch(err){
  res.status(400).json({
    message: err,
  });
}
  
});


router.post("/login", async (req, res) => {
  const {email, password } = req.body;
  console.log( email, password );
  try{
  const users =  await UserModel.find({ "email": email, "password": password})
  //  console.log("user", users)
  if(users.length>0){
    const currentUser = {
      email: users[0].email,
     name: users[0].name,
      isAdmin: users[0].isAdmin,
      _id: users[0]._id
    };
    // console.log(currentUser)
    res.status(200).send(currentUser)
  }
  }
catch(err){
  res.status(404).json({
    message: "Something Went wrong",
  });

}
});

router.post("/delete", async (req, res) => {
  const { _id } = req.body;
  console.log("delete", _id );
  try{
    UserModel.findOneAndDelete({"_id": _id})
    res.status(200).send("User Deleted");
  } catch (error) {
    res.status(404).json({ message: error.stack });
  }
  
});

module.exports = router;