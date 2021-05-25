import Router from "express"
import JokesController from "./JokesController.js";
const jokesRouter = Router()

jokesRouter.post("/jokes", JokesController.create)

export default jokesRouter


