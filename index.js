const express = require("express");
const app = express();
const PORT = 7000;
const routes = require('./routes/index');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/', routes);

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
