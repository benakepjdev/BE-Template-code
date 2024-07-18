import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('I will definately achieve my goalsgjhvjhvjnjn');
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log('Listning on port 3000');
});
