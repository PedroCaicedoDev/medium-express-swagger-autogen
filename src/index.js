const express = require('express');
const app = express();
 
// Confgs
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2)
 
// Middleware
app.use(express.urlencoded({extended:false}));
app.use(express.json());

// Routes
const loadRoutes = require('./routes');
loadRoutes(app);

// Load swagger support
const swagger = require('./docs/swagger/autogen');
swagger();

// Start server
app.listen(app.get('port'), () => {
    console.log(`Server listening on port ${app.get('port')}`);
});