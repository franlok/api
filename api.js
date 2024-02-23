require('dotenv').config();
const express = require('express');
const { generateJWT } = require('./generate_jwt'); // Adjust path as necessary

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/generate-token', (req, res) => {
  const { user, role } = req.body;
  const token = generateJWT(user, role);
  res.json({ token });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
