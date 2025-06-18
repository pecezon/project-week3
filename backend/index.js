const express = require("express");
const app = express();
const PORT = 5001;

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

app.use(express.json());

//Import routes
const boardsRoute = require("./routes/boards");
const kudosRoute = require("./routes/kudos");

app.use("/boards", boardsRoute);
app.use("/kudos", kudosRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
