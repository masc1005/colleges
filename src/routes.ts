import { Router } from 'express'
import university from './controller/university'

const routes = Router()

routes.post('/university', university.insert)

routes.get('/university', university.listMany)
routes.get('/university/:id', university.listOne)
routes.put('/university/:id', university.update)
routes.delete('/university/:id', university.delete)


routes.post('/newUniversity', university.create)


export default routes
