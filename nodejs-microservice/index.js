
const express = require('express');
const path = require('path');
const routes = require('./src/routes/index');

// Create the api
const app = express();

// Taking port by app
const PORT = process.env.PORT || 3000;

// Set view files
app.set('views', path.join(__dirname + '/src/views'))
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'ejs');

// Render CSS
app.use(express.static(path.join(__dirname, 'src')))

// Use router
app.use(routes);  
app.use(express.json());
app.use(express.urlencoded({ extended: true }));  

// Run server
app.listen(PORT, () => {
    console.log('Server on port', PORT)
})