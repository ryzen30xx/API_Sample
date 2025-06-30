const express = require('express');
const cors = require('cors');
require('dotenv').config();
const dumpData = require('./Data/dumpData.json'); // Assuming dumpData is an array of objects

const app = express();

const corsOptions = {
    origin: process.env.CORS_ALLOW || '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204
};

app.use(cors(corsOptions));

const port = process.env.PORT || 3000;

app.get('/', (req, res) => { 
    // for (let i = 0; i < dumpData.length; i++) {
    //     console.log(dumpData[i]);
    // }
    res.json(dumpData);
});

app.get('/data/:id', (req, res) => {
    const book = dumpData.find(b => b.id === parseInt(req.params.id));
    if (!book) return res.status(404).send('Book not found');
    res.json(book);
});

app.post('/data', express.json(), (req, res) => {
    const newBook = req.body;
    if (!newBook.title || !newBook.author) {
        return res.status(400).send('Title and author are required');
    }
    dumpData.push(newBook);
    res.status(201).json(newBook);
});

app.put('/data/:id', express.json(), (req, res) => {
    const book = dumpData.find(b => b.id === parseInt(req.params.id));
    if (!book) return res.status(404).send('Book not found');

    const updatedBook = req.body;
    if (!updatedBook.title || !updatedBook.author) {
        return res.status(400).send('Title and author are required');
    }

    Object.assign(book, updatedBook);
    res.json(book);
});

app.delete('/data/:id', (req, res) => {
    const bookIndex = dumpData.findIndex(b => b.id === parseInt(req.params.id));
    if (bookIndex === -1) return res.status(404).send('Book not found');

    const deletedBook = dumpData.splice(bookIndex, 1);
    res.json(deletedBook[0]);
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    console.log(`CORS is enabled for origin: ${corsOptions.origin}`);
    console.log(`CORS methods allowed: ${corsOptions.methods}`);
    console.log(`CORS preflight continue: ${corsOptions.preflightContinue}`);
    console.log(`CORS options success status: ${corsOptions.optionsSuccessStatus}`);
});
