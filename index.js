const express = require('express');
const app = express();
var cors = require('cors')
const port = process.env.PORT || 3030;
const dhammaRouter = require('./routes/dhamma');
const categoryRouter = require('./routes/category');

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.json({message: 'alive'});
});

app.use('/dhamma', dhammaRouter);
app.use('/categories', categoryRouter);

//process.env.PORT || 5000
const server = app.listen(port, () => {
  const port = server.address().port;
  console.log(`Express is working on port ${port}`);
});

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });