const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

const users = [
  { username: 'user', password: 'password' },
];

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username dan password wajib diisi!' });
  }

  const user = users.find((u) => u.username === username && u.password === password);
  if (user) {
    return res.json({ message: 'Login berhasil!' });
  } else {
    return res.status(401).json({ message: 'Username atau password salah!' });
  }
});


app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
