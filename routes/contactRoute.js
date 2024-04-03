const {Router} = require("express");
const contactController = require("../controllers/contactController")

const contactRoute = Router();

contactRoute.post("/contact", contactController);

module.exports = contactRoute;