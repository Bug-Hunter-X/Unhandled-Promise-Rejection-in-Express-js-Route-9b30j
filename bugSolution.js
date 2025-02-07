const express = require('express');
const app = express();
app.get('/', (req, res) => {
  someAsyncOperation()
    .then((result) => {
      res.send('Hello World!');
    })
    .catch((error) => {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

async function someAsyncOperation() {
  const randomNumber = Math.random();
  if (randomNumber < 0.5) {
    throw new Error('Something went wrong!');
  }
  return 'Operation completed successfully';
}