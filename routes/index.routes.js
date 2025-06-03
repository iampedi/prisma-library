// routes/index.routes.js
const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.use("/books", require("./books.routes"));

module.exports = router;
