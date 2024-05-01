import express from "express"
import { createConnection } from 'mysql'
import cors from 'cors'

const app = express()
app.use(cors())

const db = createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "signup"
})
