/*const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/transactions', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Routes
const transactionsRouter = require('./routes/transactions');
app.use('/api/transactions', transactionsRouter);


let threatReports = [];

app.post('/api/report-threat', (req, res) => {
  const { description, email } = req.body;
  if (!description) {
    return res.status(400).json({ message: 'Description is required' });
  }
  
  const report = {
    id: threatReports.length + 1,
    description,
    email,
    date: new Date(),
  };

  threatReports.push(report);
  console.log('Threat report received:', report);

  res.status(201).json({ message: 'Report submitted successfully' });
});

app.get('/api/reports', (req, res) => {
  res.status(200).json(threatReports);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
*/