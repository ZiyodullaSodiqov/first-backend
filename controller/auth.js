const auth = require('../models/auth')

// user add method POST
exports.add = async(req , res ) => {
    try{
        let Model = new auth({
            ...req.body
        })
        Model.save()
        res.status(201).json({
            message: 'succesfuly create',
            data: Model
        })
    } catch(e){
        res.status(500).json(
            {
                message: 'Failed ' + e
            }
        )
    }
}


// user get all method GET

exports.getAll = async(req,res) => {
    await auth.find().sort({createAt: -1}).exec((error, value) =>{
        if(error) throw error
        else {
            res.json({value})
        }
    })
}

// user edit method PUt

exports.modelPut = async(req,res) => {
    await auth.findByIdAndUpdate(req.params.id).exec(async (error, value) => {
        if (error) throw error
        else{
            value.name = req.body.name
            value.password = req.body.password
            await value.save()
            .then(()=>{
                res.json(value)
            })
            .catch((error) =>{
                res.json(error)
            })
        }
    })
}


// user delete method DELETE

exports.modelDelete = async(req,res) => {
    await auth.findByIdAndDelete(req.params.id).exec(async (error, value) => {
        if (error) throw error
        else{
            res.json({
                message:"delete",
                data: []
            })
        }
    })
}
