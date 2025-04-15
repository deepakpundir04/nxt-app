
  import { Schema,model } from "mongoose";
  
  const MySchema = new Schema({
    name: {
      type: String,
      required: true,
      maxlength: 50
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    age:String,
    email:String,
    interest:Array,
    mobile:String,

  });
  
  const User = model("user", MySchema)
  
  export default User;