import express from 'express'
let app = express()
import cors from 'cors'
import bodyParser from 'body-parser'
import morgan from  'morgan'
 
import router from './router.js'
 
app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors()) 
app.use(morgan('dev'))
app.use(router)
app.use(morgan(':method :url :status :response-time ms - :req-body'));
 
app.listen(80, () => {
  console.log('The server started successfully.');
})
