const express = require("express");
const cors = require("cors");

const port = process.env.PORT || 3333;

const userRoutes = require("./routes/user");
const noteRoutes = require("./routes/note");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/user", userRoutes);
app.use("/note", noteRoutes);

app.listen(port, () => {
  console.log(`🔥 Server is up and running on port ${port}`);
});
