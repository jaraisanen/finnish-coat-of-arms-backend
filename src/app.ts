import express from 'express'
import bodyparser from 'body-parser'

const app = express()

app.use(bodyparser.json())

const writeMessage = (message: string) => {
    console.log(message);
}

writeMessage('Hello, World!');