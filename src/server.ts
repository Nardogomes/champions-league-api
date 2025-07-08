import express, { json, Request, Response } from "express"

const app = express()

app.use(json())

const port = process.env.PORT

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("hello world")
})

app.listen(port, () => console.log(`Server is runnig at port ${port}`))