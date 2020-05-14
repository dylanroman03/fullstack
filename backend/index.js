const express = require('express');

//Initialize App
const app = express()

//Settings express
app.set('port', 3000);

//Listen App
app.listen(app.get('port'), () => {
  console.log('Service active')
})
