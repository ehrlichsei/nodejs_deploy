const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // 添加这一行来解析 JSON 请求体


app.get('/', (req, res) => {
  res.send('Hello, Heroku!');
});

app.get('/api', (req, res) => {
    res.send('test api!');
  });

app.post('/submit', (req, res) => {
    const data = req.body;
    res.send(`Received data: ${JSON.stringify(data)}`);
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
