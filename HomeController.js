import mongoose from "mongoose"

import HomeService from "./HomeService.js";

class HomeController{
     async getAll (req, res){
         try{
            const data =  await HomeService.getAllService()
            return res.json(data)
         }catch(e){
            res.json(e.message)
         }
            
    }
    async create(req, res){
        try{
            const post = await HomeService.create(req.body)
            
            return res.json(post) 
        }catch(e){
            res.json(e.message)
        }
        
        
    }
}

export default new HomeController