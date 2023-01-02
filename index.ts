import express from 'express'
import { routes } from './src/routes'
const app = express()
app.use(express.json())
routes.forEach(e=>{
    app.use(e.endpoint,e.routes)
})

app.listen(4000, () => {
    console.log('rodando na porta 4000')
})