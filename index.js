const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000; // Render needs process.env.PORT

// Route for root ("/") so Render works
app.get('/', (req, res) => {
    console.log("Root route hit");
    res.send('Hello from root!');
});

// Your existing test route
app.get('/mytestapp', (req, res) => {
    console.log("My get function works");
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});
