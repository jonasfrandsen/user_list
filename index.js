require('dotenv').config({path: __dirname + '/.env'})
const express = require('express');
const path = require('path');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors')

const mongodblink = process.env.MONGO_DB_LINK;

const app = express();

mongoose.connect(`${mongodblink}`,
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}).then(() => {
  console.log('connected to database')
});

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

//allow cross-origin requests
app.use(cors());

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.listen(5000, () => {
  console.log('now listening for requests on port 5000')
})
