import Router from "express";
import HomeController from "./HomeController.js"
const home = Router()

home.get("/home", HomeController.getAll)
home.post("/home", HomeController.create)


export default home