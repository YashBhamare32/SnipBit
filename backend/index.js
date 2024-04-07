import express from 'express';
import bodyParser from 'body-parser';
import { nanoid } from 'nanoid';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

// In-memory database to store shortened URLs
const urlDatabase = {};

app.use(cors()); // Enable CORS for all requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Endpoint to shorten a URL
app.post('/shorten', (req, res) => {
    const { url } = req.body;

    if (!url) {
        return res.status(400).json({ error: 'URL is required' });
    }

    const shortId = nanoid(7); // Generate a unique 7-character ID
    urlDatabase[shortId] = url;

    const shortUrl = `http://localhost:${PORT}/${shortId}`;
    res.json({ shortUrl });
});

// // Endpoint to redirect to original URL
// app.get('/:shortId', (req, res) => {
//     const { shortId } = req.params;
//     const originalUrl = urlDatabase[shortId];

//     if (!originalUrl) {
//         return res.status(404).send('URL not found');
//     }

//     res.redirect(originalUrl);
// });

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
