import express, { Request, Response } from 'express'

const app = express()

const { PORT } = process.env

app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  return res.send('test express')
})

app.listen(PORT, () => {
  console.log('server running on port ' + PORT)
})
