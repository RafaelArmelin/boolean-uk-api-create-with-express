const express = require("express");

const router = express.Router();

const { createBook } = require("./controller");

router.post("/", createBook);

module.exports = router;
