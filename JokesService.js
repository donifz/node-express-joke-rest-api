import Jokes from "./jokes.js"


class JokesService{
    async create(jokes){
        try{
            const {name, joke} = jokes
            console.log({name, joke})
            const createdJoke = await Jokes.create({name, joke})
            
            return createdJoke
        }
        catch(e){
            throw new Error("Ошибка" + e)
        }
    }
}
export default new JokesService