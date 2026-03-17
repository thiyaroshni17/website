const express = require('express');
const app = express();
require('dotenv').config();
const {connectDB} = require('./database/db.js');
const cors = require('cors');
const cookieparser = require('cookie-parser');
const Router = require('./routes/blog.js');




connectDB();
const PORT = process.env.PORT || 5000;
console.log('Frontend URL from ENV:', process.env.FRONTEND_URL);

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:5173',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(cookieparser())
app.use('/escapeloop',Router)
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
