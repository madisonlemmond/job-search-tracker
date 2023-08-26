import express from 'express';
const app = express();
const add = (a, b) => a + b;
app.get('/', (req, res, next) => {
    console.log(add(5, 5));
    res.send('Hello');
});
app.listen(5000, () => console.log('Server running on port 5000'));
//# sourceMappingURL=index.js.map