const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8000;
const routes = require('./routes/index');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

app.use('/api/', routes);

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
