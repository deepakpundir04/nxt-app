import Joi from "joi";

const userSchema = Joi.object({
  name: Joi.string().required(),
  age:Joi.any().required(),
  mobile:Joi.any().required(),
  email:Joi.string().required(),
  interest:Joi.any().required(),
});

const userEditSchema = Joi.object({
    name: Joi.string().required(),
    age:Joi.any().required(),
    mobile:Joi.any().required(),
    email:Joi.string().required(),
    interest:Joi.any().required(),
    _id:Joi.required(),
  })

export {
    userSchema,
    userEditSchema
}