const mongoose = require("mongoose");
const contactModel = require("../models/contactModel");

const createContact = async (req, res) => {
  console.log(req.body, "create");
  const {name, email, message} = req.body;

  try {
      const response = await contactModel.create({name, email, message});
      // response.save();
      res.json({
          message: "Data Saved Successfully"
      })
  } catch (error) {
      res.send(`Internal Server Error: ${error}`)
  }
};

module.exports = createContact;
