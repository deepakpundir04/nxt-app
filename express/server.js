import express from "express"
import dotenv from  'dotenv';
import dotenvExpand from 'dotenv-expand';

const env = dotenv.config();
dotenvExpand.expand(env);
console.log(process.env.MONGO_URI)
import cors from "cors";
import connectDB from "./db.js";
import userRouter from "./route/user.route.js"

const NODE_PORT = process.env.NODE_PORT || 4000;

const app = express();
app.use(cors());
app.use(express.json())

app.get("/",(req,res)=>{
    console.log(`home url `)
    return res.json(`app is running `)
})

app.use('/api/users',userRouter);


connectDB().then(()=>{
    app.listen(NODE_PORT,()=>{
        console.log(`server is running at ${NODE_PORT}`)
    })
}).catch(err =>{
    console.log(`error in connecting DB`)
})

