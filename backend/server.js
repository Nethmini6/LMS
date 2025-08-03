const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json()); // to parse JSON data from frontend

// Dummy user data
const dummyUser = {
  email: 'admin@gmail.com',
  password: 'admin123'
};

// Route for login
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (email === dummyUser.email && password === dummyUser.password) {
    res.status(200).json({ message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Invalid email or password' });
  }
});

/*app.get('/', (req, res) => {
  res.send('Backend is running');
}); */

//start server 
app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
