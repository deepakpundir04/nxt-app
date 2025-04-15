import express from "express";
import { create,edit,deleteById,getAll,getById } from "../controller/user.c.js";
import { userSchema,userEditSchema } from "../schema/user.s.js";
import { createValidator } from "express-joi-validation";
const userRouter = express.Router()
const validator = createValidator({})

// middleware that is specific to this router
const timeLog = (req, res, next) => {
  console.log('Time: ', Date.now())
  next()
}
userRouter.use(timeLog)

userRouter.get('/health',(req,res)=>{
  res.json(`working fine.....`)
})

userRouter.get('/', getAll)

userRouter.post('/',validator.body(userSchema), create)

userRouter.delete('/:id',deleteById)

userRouter.put('/',validator.body(userEditSchema),edit)

userRouter.get('/:id',getById);

export default userRouter;