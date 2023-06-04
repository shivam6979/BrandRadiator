const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController')

router.post('/add',UserController.signup);
router.put("/update/:id",UserController.updateUser)
router.put("/delete/:id",UserController.deleteUser)
router.get("/getuser", UserController.getUser)


module.exports=router;