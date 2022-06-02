import { Router, Request, Response } from 'express'
import { University } from './controller/index'

const routes = Router()


routes.get('/', (req: Request, res: Response) => { 
  return res.send('Olá')
})


routes.post('/university', University.insert)

routes.get('/university', University.listMany)
routes.get('/university/:id', University.listOne)
routes.put('/university/:id', University.update)
routes.delete('/university/:id', University.delete)


routes.post('/newUniversity', University.create)


export default routes
