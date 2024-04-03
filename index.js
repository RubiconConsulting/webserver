const express = require("express");
const app = express();
const cors = require("cors");
const contactRoute = require("./routes/contactRoute");
const connectMongoDB = require("./config/mongodb");

connectMongoDB();

app.use(cors());
app.use(express.json())

app.get("/", (req, res) => {
  res.send("Welcome!!!");
});

app.use("/", contactRoute);

console.log(process.env.PORT);

const port = 5000 || process.env.PORT;

app.listen(port, () => {
  console.log(`Server is running on Port ${port}`);
});
