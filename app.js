// app.js
const express = require('express');
const app = express();
const path = require('path');

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define routes
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

// Use the defined routes
app.use('/', indexRouter);
app.use('/users', usersRouter);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});