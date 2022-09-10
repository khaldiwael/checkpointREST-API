const express = require('express')
const router = express.Router()

const {
    getAllUsers,
    addUser,
    updateUser,
    deleteUser
} =  require('../controllers/userController')

router.get('/test',(req,res)=>{
    res.send("route is opened");
})

router.get('/users',getAllUsers)
router.post('/user',addUser)
router.put('/user',updateUser)

router.delete('/user/:id',deleteUser)

module.exports=router