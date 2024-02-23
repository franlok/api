require('dotenv').config();
const express = require('express');
const { generateJWT } = require('./generate_jwt'); // Adjust path as necessary

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/generate-token', (req, res) => {
  const { user, role } = req.body;
  try {
    const token = generateJWT(user, role);
    res.json({ token });
  } catch (error) {
    console.error('Error generating JWT:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
