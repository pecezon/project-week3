const express = require("express");
const router = express.Router();

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

router.get("/get-all-kudos", async (req, res) => {
  const kudos = await prisma.kudoCard.findMany();
  res.json(kudos);
});

router.get("/get-kudos-by-board-id/:boardId", async (req, res) => {
  const boardId = parseInt(req.params.boardId);
  const kudos = await prisma.kudoCard.findMany({
    where: {
      boardId: boardId,
    },
  });
  res.json(kudos);
});

router.post("/create-new-kudo", async (req, res) => {
  const { title, description, gifUrl, upvotes, owner, boardId } = req.body;
  const newKudo = {
    title,
    description,
    gifUrl,
    createdAt: new Date(),
    upvotes: parseInt(upvotes) || 0,
    owner: owner || "",
    boardId: parseInt(boardId),
  };

  const kudo = await prisma.kudoCard.create({
    data: newKudo,
  });

  res.status(201).json(kudo);
});

router.put("/upvote-kudo/:kudoId", async (req, res) => {
  const kudoId = parseInt(req.params.kudoId);

  const kudo = await prisma.kudoCard.update({
    where: {
      id: kudoId,
    },
    data: {
      upvotes: {
        increment: 1,
      },
    },
  });

  res.status(201).json(kudo);
});

router.delete("/delete-kudo/:kudoId", async (req, res) => {
  const kudoId = parseInt(req.params.kudoId);

  try {
    await prisma.kudoCard.delete({
      where: {
        id: kudoId,
      },
    });

    res.status(204).send();
  } catch (error) {
    res.status(404).send();
  }
});

module.exports = router;
