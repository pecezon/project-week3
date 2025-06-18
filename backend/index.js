//Express setup
const express = require("express");
const app = express();
const PORT = 5432;

//Cors Setup
const cors = require("cors");

//Use json and cors
app.use(cors());
app.use(express.json());

//Import routes
const boardsRoute = require("./routes/boards");
const kudosRoute = require("./routes/kudos");

app.use("/boards", boardsRoute);
app.use("/kudos", kudosRoute);

//Run app at port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
