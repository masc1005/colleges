import Express from "express";
import dotenv from 'dotenv'
import cors from 'cors'

import routes  from "./routes";

const server = Express()

dotenv.config()
server.use(Express.json())
server.use(cors())
server.use(routes)

server.listen(process.env.SERVER_PORT, ()=> { console.log("Olá!") })