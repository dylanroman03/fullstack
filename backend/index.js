const express = require('express');
const morgan = require('morgan');
const multer = require('multer');
const path = require('path');

//Initialize
const app = express()

//Settings express
app.set('port', 3000);

//Middlewares
app.use(morgan('dev'))

const storage = multer.diskStorage({
  destination: path.join(__dirname, 'public/uploads'),
  filename(req, file, cb) {
    cb(null, new Data().getTime() + path.extname(file.originalname))
  }
})

app.use(multer({storage}).single('image'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())

//Listen App
app.listen(app.get('port'), () => {
  console.log('Service active on ', app.get('port'))
})
