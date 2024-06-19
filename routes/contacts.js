const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
    // Code to retrieve all contacts from the database or any other data source
    // Send the contacts as a response
    res.send("GET /contacts");
  });
  module.exports = router;