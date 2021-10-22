const Book = require("./model");

const db = require("../../utils/database");

const { router } = require("express");

Book();

function createBook(req, res) {
  console.log("HEREEEEEEE", req.body);
  const bookToCreate = {
    ...req.body,
  };

  const createBook = `
      INSERT INTO books
        (title, type, author, topic, publicationDate)
      VALUES
        ($1, $2, $3, $4, $5)
        RETURNING *;
    `;

  db.query(createBook, [
    bookToCreate.title,
    bookToCreate.type,
    bookToCreate.author,
    bookToCreate.topic,
    bookToCreate.publicationDate,
  ])
    .then((result) => res.json({ data: result.rows[0] }))
    .catch(console.error);
}
module.exports = {
  createBook,
};
