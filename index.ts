import express from 'express'
import { routes } from './src/routes'
import { Request, Response, NextFunction } from 'express'
const app = express()
app.use(express.json())
routes.forEach(e=>{
    app.use(e.endpoint,e.routes)
})

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(400).json({"erro": err.message});
})

app.listen(4000, () => {
    console.log('rodando na porta 4000')
})