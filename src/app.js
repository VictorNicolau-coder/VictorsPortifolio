const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')

const path = require('path')
const fs = require('fs')

require("dotenv").config()

//Configurando motor EJS
app.set("views", path.join(__dirname, "views"))
app.set('view engine', 'ejs')

//Declarando pasta public para expres
app.use(express.static(path.join(__dirname, "public")))

fs.readdirSync(path.join(__dirname, "routes")).forEach((file) => {
  console.log(file)
  const router = require(path.join(__dirname, "routes", file))
  app.use('/', router)
})

app.listen(process.env.PORT, () => {
  console.log(`app runnin on port http://localhost:${process.env.PORT}`)
})
