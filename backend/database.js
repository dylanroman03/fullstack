const mongoose = require('mongoose');
const mongodb_uri = process.env.MONGODB_URI

mongoose.connect(mongodb_uri, {
  useNewUrlParser: true
})
  .then(db => console.log('DB is connect'))
  .catch(err => console.error(err));
