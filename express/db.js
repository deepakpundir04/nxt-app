import mongoose from "mongoose";

const connectDB = async () => {
    try {
      let url='';
      const host ='host.docker.internal';
      const user = process.env.MONGO_USERNAME ? process.env.MONGO_USERNAME :null
      const pass = process.env.MONGO_USERNAME ? process.env.MONGO_USERNAME :null
      const dbname = process.env.MONGO_DB ? process.env.MONGO_DB : 'test'
      if(user && pass){
        url =`mongodb://${user}@${pass}:${host}:27017/${dbname}`
      }
      else{
        url =`mongodb://${host}:27017/${dbname}`
      }
      const conn = await mongoose.connect(url);
      console.log(`MongoDB Connected: ${host}`);
    } catch (error) {
      console.error(error.message);
      process.exit(1);
    }
  }

export default connectDB;