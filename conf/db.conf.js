const mongoose = require('mongoose');
const MONGODB_URI = 'mongodb://localhost:27017/lab-express-cinema';

mongoose.connect(MONGODB_URI, { useNewUrlParser: true })
  .then(() => console.info(`it works ${MONGODB_URI}`))
  .catch(error => console.info(`An error oucurred ${MONGODB_URI}`, error))
// TODO: setup the database connection and log the connection st`atus