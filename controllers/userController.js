const user = require('../moduls/user')

exports.getAllUsers = async (req,res) => {
    try{
        const allUser = await user.find()
        // console.log('passe get all users',JSON.parse(allUser));
        res.status(200).send(allUser)
    }catch(err){
        res.status(500).send(err)
    }
}

exports.addUser = async (req,res) =>{
    try{
        let userX = new user(req.body)
        let f = await user.find({lastName:userX.lastName})
        if(f.length == 0){
            userX.save()
            res.status(200).send(req.body)
        } else {
            res.status(710).send(req.body)
        }

        }catch(err) {
        console.log(err);
        res.status(502).send(err)
    }
}

exports.updateUser = async (req,res) => {
    try{
        let userX = await user.find({_id :req.body._id})

        console.log('userX. : ',userX)
        if(userX.length != 0) {
            let upOne = await user.updateOne({_id :req.body._id},{$set : req.body})
            res.status(200).send(upOne)
        }else {
            res.status(512).send("user is not exist")
        }

    } catch (err) {
      console.log('err: ',err)
      res.status(511).send(err)
    }
}

exports.deleteUser = async (req,res) => {
    try{
        let userX = await user.find({_id :req.params.id})

        if(userX.length != 0) {
            let deleteOne = await user.deleteOne({_id :req.params.id})
            res.status(200).send(deleteOne)
        }else {
            res.status(400).send("user is not exist")
        }

    } catch (err) {
      console.log('err: ',err)
      res.status(500).send(err)
    }
}