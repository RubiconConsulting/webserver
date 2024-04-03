const {Schema, model} = require("mongoose");

const contactSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  message: {
    type: String,
    require: true,
  },
});

const contactModel = model("contact", contactSchema);

module.exports = contactModel;