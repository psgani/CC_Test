const express = require('express');
const cors = require('cors');
const connectToMongo = require('./db');

connectToMongo();

const app = express();

// Apply CORS middleware BEFORE defining routes
app.use(cors({
    origin: "https://cc-test-p3mt.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE","OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
}));

app.options('*', cors());

// Middleware to handle JSON requests
app.use(express.json());

// Debugging: Log incoming requests
app.use((req, res, next) => {
    console.log(`Incoming request: ${req.method} ${req.url}`);
    next();
});



// Define routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/question', require('./routes/question'));
app.use('/api/blog', require('./routes/blog'));
app.use('/api/answer', require('./routes/answer'));
app.use('/api/count', require('./routes/count'));

// Handle preflight requests (OPTIONS method)


// Start server
const port = 5000;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
