import { Request, Response } from 'express'
import { convertTypeAcquisitionFromJson } from 'typescript'
import { prisma } from '../database/index'

import { api } from '../service/index'

import { countries } from './countries'

class University {

  async insert(req: Request, res: Response) {

    const data = []
    const lines =  await prisma.university.count()  

    if(lines > 0){
      await prisma.university.deleteMany({})
    }


    for(let i = 0; i < countries.length; i++){

      const response = await api.get(`search?country=${countries[i]}`)
      
      for(let l = 0; l < response.data.length; l++){        
        
        const save = await prisma.university.create({
          data: {
            name: response.data[l].name,
            country: response.data[l].country,
            twoCode: response.data[l].alpha_two_code,
            domain: response.data[l].domains,
            web: response.data[l].web_pages            
          }
        })
        data.push(save)
      }
    }
    return res.send({data}).status(200).end()
  }


  async listMany(req: Request, res: Response){

    const data = await prisma.university.findMany({})

    return res.send({data}).status(200).end()

  }

  async listOne(req: Request, res:  Response) {

    const { id } = req.params

    const data = await prisma.university.findFirst({where: { id: id }})

    return res.send({data}).status(200).end()

  }

  async create(req: Request, res: Response){

    const { name, country, state, twoCode, domain, web } = req.body

    const exists = await prisma.university.findFirst({ where: { name: name } })

    if(exists){
      return res.send({msg:'University Exits'}).status(409).end()
    }

    const save = await prisma.university.create({
      data:{
        name, 
        country, 
        state, 
        twoCode, 
        domain, 
        web
      }
    })
    
    return res.send({save}).status(200).end()
  }


  async update(req: Request, res: Response){

    const { name, domain, web } = req.body
    const { id } = req.params

    const exists = await prisma.university.findFirst({ where: { id: id } })

    if(!exists){
      return res.send({msg: "University not exists!"}).status(404).end()
    }

    const save = await prisma.university.update({
      where:{id},
      data:{
        name,
        domain,
        web
      }
    })
    return res.send({save}).status(200).end()
  }


  async delete(req: Request, res: Response) {

    const {id} = req.params

    const exists = await prisma.university.findFirst({ where: { id: id } })

    if(!exists){
      return res.send({msg: "University not exists!"}).status(404).end()
    }

    const drop = await prisma.university.delete({
      where: { id }
    })

    console.log(drop)

    return res.send({msg: "University droped from database"}).status(200).end()

  }

}

export default new University