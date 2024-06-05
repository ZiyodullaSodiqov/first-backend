const express = require('express');
var cors = require('cors')

const path = require('path')

const app = express();
app.use(cors())
const mongoose = require('mongoose');



mongoose.connect('mongodb+srv://ziyodullasodiqov2007:oQ6i2QKEb8GjIzEj@ac-gdhng5t.heagvwv.mongodb.net/?authSource=admin&replicaSet=atlas-bi7uyn-shard-0&retryWrites=true&w=majority&ssl=true', { useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    console.log('MongoDBga ulanish hosil qilindi...');
  })
  .catch((err) => {
    console.error('MongoDBga ulanish vaqtida xato roy berdi...', err);
  });

// mongoose.set('useFindAndModify', false);

app.use(express.json());

app.use('/api/reg', require('./routes/register'))
app.use('/api/auth', require('./routes/auth'))

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`${port}chi portni eshitishni boshladim...`);
});