import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()
export class CoupleController {
    async create(req, res) {
        console.log(req.body)
        console.log(req.text)
        const name = req.body.first;
        const secondName = req.body.second;
        try {
            const createdCouple = await prisma.couple.create({
                data: {
                    first: name,
                    second: secondName
                }
            });
            return res.json(createdCouple);
        } catch (error) {
            // Обработка других ошибок
            console.error(error);
            return res.status(500).json({ error: "Internal server error" });
            
        }
    }
    async getAll(req,res){
        const types = await prisma.couple.findMany()
        return res.json(types)
    }
    async getOne(req,res){
        const word = req.params
        console.log(word)
        const type = await prisma.couple.findUnique({
            where:{
                id: Number(word.id),
        }})
        if(!word){
            return res.status(401).send("ERROR NOT FOUND")
        }
        res.json(type);
    }
    async delete(req,res){
        const deleting = await prisma.couple.deleteMany({})
        return res.json(deleting)
    }
}