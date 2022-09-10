const express = require('express')

const connectDB = require('./config/dataBase')

const bodyPerser = require('body-parser')


const app = express()

// const router =express.Router()
// configuration mte3 dotenv bech najem ne5dem b process.env.DB-URI
require('dotenv').config()
// app.use(express.json)



connectDB()



const userModel = require('./moduls/user')





const router= require('./router/usersRouter')

app.use(bodyPerser.urlencoded({extended :false}))
app.use(bodyPerser.json())

app.use("/api",router)




// const a = new userModel(
//     {
//         firstName:'wael',
//         lastName:'khaldi',
//         age:29,
//         phone:20200100,
//         dateBirth:10-04-1992

//     }
// )

// a.save().then((doc) =>{console.log(doc);}).catch((err)=>{console.log('err save:',err);})

// app.get('/home',(req,res)=>{
//     userModel.find().then(doc => res.status(200).send(doc)).catch(err=>res.status(400).send(err))
//     // res.send('helow world it is me')
// })



// app.get('/',(req,res)=>{
//     userModel.find().then(doc => console.log(doc)).catch(err=>console.log(err))
//     res.send('index page')
// })



const port =4444

app.listen(port,(err) =>{
    if (err) console.log(err); else console.log(`server is running in port :${port}`);
})
