const express = require('express');
const app = express();

app.get('/get_name', (req, res) => {
    res.send('Hello World!');
});

app.post('/save_user', (req, res) => {
    res.send('This is an example of an endpoint.');
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
