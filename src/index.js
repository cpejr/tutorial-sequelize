const express = require("express");
const cors = require("cors");

const port = process.env.PORT || 3333;

const app = express();

app.use(express.json());

app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});
