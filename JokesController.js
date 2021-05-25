import JokesService from "./JokesService.js";
class JokesController{
    async create(req,res){
        try{
            const createdJoke = await JokesService.create(req.body)
            res.json(createdJoke)
        }
        catch(e){
            res.json(e.message)
        }
    }
}
export default new JokesController