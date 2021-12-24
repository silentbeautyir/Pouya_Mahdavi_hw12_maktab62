// dependecies
const { join } = require("path");

// models
const productModel = require("../models/products.json");

// functions
function homePage(req, res) {
  let products = productModel;
  if (req.query?.search) {
    products = productModel.filter((product) => {
      return (
        product.title.includes(req.query.search) ||
        product.description.includes(req.query.search) ||
        product.price.toString().includes(req.query.search)
      );
    });
  }
  res.render("home", { products });
}

function aboutPage(req, res) {
  res.render("about");
}

function contactPage(req, res) {
  res.render("contact");
}

function notFoundPage(req, res) {
  res.render("404");
}

// export functions
module.exports = {
  homePage,
  productPage,
  aboutPage,
  contactPage,
  notFoundPage,
};
