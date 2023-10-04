const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json()); // Middleware to parse JSON body

app.post('/', async (req, res, next) => {
    try {
        const responses = await Promise.all(req.body.developers.map(d => axios.get(`https://api.github.com/users/${d}`)));
        
        const out = responses.map(r => ({ name: r.data.name, bio: r.data.bio }));
        
        return res.json(out);
    } catch (err) {
        console.error("Error:", err.message);
        next(err);
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

