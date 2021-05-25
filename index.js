import express from "express";
import home from "./home.js";
import mongoose from "mongoose";
import jokesRouter from "./jokesRoute.js";

const app = express()
app.use(express.json())

const PORT = 3000
const DB_URL = `mongodb+srv://user:user@cluster0.zsxvy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

app.use("/home", home)
app.use("/jokes", jokesRouter)


async function startApp(){
    try{
        await mongoose.connect(DB_URL,{ useNewUrlParser: true, useUnifiedTopology: true})
        app.listen(PORT, ()=> console.log("...server started" + PORT))
    }
    catch(e){
        console.log(e)
    }
}

startApp()



