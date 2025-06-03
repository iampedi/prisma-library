const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// GET all books from /api/books
router.get("/", async (req, res, next) => {
  try {
    const getAllBooks = await prisma.book.findMany();
    res.json(getAllBooks);
  } catch (error) {
    next(error);
  }
});

// POST a new book to /api/books
router.post("/", async (req, res, next) => {
  try {
    const newBook = await prisma.book.create({ data: req.body });
    res.json(newBook);
  } catch (error) {
    next(error);
  }
});

// GET one book from /api/books/:id
router.get("/:id", async (req, res, next) => {
  try {
    const getOneBook = await prisma.book.findUnique({
      where: { id: req.params.id },
    });
    res.json(getOneBook);
  } catch (error) {
    next(error);
  }
});

// PUT Update one book from /api/books/:id
router.put("/:id", async (req, res, next) => {
  try {
    const updatedBook = await prisma.book.update({
      where: { id: req.params.id },
      data: req.body,
    });
    res.json(updatedBook);
  } catch (error) {
    next(error);
  }
});

// DELETE one book from /api/books/:id
router.delete("/:id", async (req, res, next) => {
  try {
    const deletedBook = await prisma.book.delete({
      where: { id: req.params.id },
    });
    res.json(deletedBook);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
