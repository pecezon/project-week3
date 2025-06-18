const express = require("express");
const router = express.Router();

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

router.get("/get-all-boards", async (req, res) => {
  const boards = await prisma.kudoBoard.findMany();
  res.json(boards);
});

router.post("/create-new-board", async (req, res) => {
  const { title, category, author } = req.body;
  const newBoard = {
    title,
    category,
    author: author || "",
  };

  const board = await prisma.kudoBoard.create({
    data: newBoard,
  });

  res.status(201).json(board);
});

module.exports = router;
