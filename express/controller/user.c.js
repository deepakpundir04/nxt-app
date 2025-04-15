import User from "../model/user.js"
const create = async(req,res)=>{
    try{
        console.log(`with controller`)
        let user = req.body
        user = new User(user)
        await user.save();
        res.status(201)
        res.json(`success`)
    }catch(e){
        console.log(e)
        res.status(500)
        res.json(`Something Wrong :: Unable to create data`)
    }
}

const edit = async(req,res)=>{
    try{
        let id = req.body._id
        let result = await User.findByIdAndUpdate(id,req.body,{new:true})
        console.log(result)
        res.json(result)
    }catch(e){
        console.log(e)
        res.status(500)
        res.json(`Something Wrong :: Unable to edit data`)
    }
}
const deleteById = async(req,res)=>{
    try{
        let id = req.params.id 
        const result = await User.findByIdAndDelete(id);
        res.json(result)
    }catch(e){
        console.log(e)
        res.status(500)
        res.json(`Something Wrong :: Unable to delete data`)
    }
}
const getAll = async(req,res)=>{
    try{
        console.log(`with controller getAll`)
        let result = await User.find({},{ name: 1, age: 1,mobile:1,email:1,interest:1,_id:1 } );
        let totalCount = await User.countDocuments();
        let page = req.params?.page ? req.params?.page : 1;
        let resposne = {
            user:result,
            totalCount:totalCount,
            page:page
        }
        res.json(resposne)
    }catch(e){
        console.log(e)
        res.status(500)
        res.json(`Something Wrong :: Unable to fetch data`)
    }
}

const getById = async(req,res)=>{
    try{
        let id = req.params.id
        let result = await User.findById(id)
        console.log(result)
        if(!result){res.status(404)}
        res.json(result)
    }catch(e){
        console.log(e)
        res.status(500)
        res.json(`Something Wrong :: Unable to fetch data`)
    }
}
export {
    create,
    edit,
    deleteById,
    getAll,
    getById
}