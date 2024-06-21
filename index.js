const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// 设置视图引擎为 ejs
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views'); // 指定视图文件夹路径

app.use(express.json()); // 添加这一行来解析 JSON 请求体


app.get('/', (req, res) => {
  res.send('Hello, Heroku!');
});

app.get('/api', (req, res) => {
    res.send('test api!');
  });

  // GET 请求渲染网页
app.get('/page', (req, res) => {
    res.render('page', { title: 'Express Page', message: 'This is an Express page!' });
  });

app.post('/submit', (req, res) => {
    const data = req.body;
    res.send(`Received data: ${JSON.stringify(data)}`);
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
