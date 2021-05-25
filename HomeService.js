import HomeData from "./HomeSchema.js";
class HomeService{
     async getAllService (){
        try{
           return await HomeData.find()
        }
        catch(e){
            throw new Error("ошибка")
        }
   }
    async create(data){
            const HomeCreatedData = await HomeData.create(data)
            return HomeCreatedData
   }
}

export default new HomeService