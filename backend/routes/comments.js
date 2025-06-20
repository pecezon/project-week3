const express = require("express");
const router = express.Router();

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

router.get("/get-comments-by-kudo-id/:kudoId", async (req, res) => {
  const kudoId = parseInt(req.params.kudoId);
  const comments = await prisma.comment.findMany({
    where: {
      kudoId: kudoId,
    },
  });
  res.json(comments);
});

router.post("/create-new-comment", async (req, res) => {
  const { message, author, kudoId } = req.body;
  const newComment = {
    message,
    createdAt: new Date(),
    author: author || "",
    kudoId: parseInt(kudoId),
  };

  const comment = await prisma.comment.create({
    data: newComment,
  });

  res.status(201).json(comment);
});

module.exports = router;
