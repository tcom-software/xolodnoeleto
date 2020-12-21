const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
  serverRuntimeConfig: {
    // Will only be available on the server side
    // secondSecret: process.env.SECOND_SECRET, // Pass through env variables
  },
  publicRuntimeConfig: {
    // Will be available on both server and client

    serverUrl: "http://projects-backend.ru",

    catalogueProducts: "/api/getProducts",
    catalogueCategories: "/api/getCategories",
    getProduct: "/api/getProduct",
    getFilters: "/api/getFilterData",
    searchProduct: "/api/searchProduct",
    makeOrder: "/api/checkout",
    callbackRequest: "api/oneClickOrder",
    contactUs: "/api/contactUs",
    addReview: "/api/review",
    getNewProducts: "/api/newProducts",

    productsUpload: "/public/uploads/products/products0",
    seriesUpload: "/public/uploads/product_series/product_series0",
    brandsUpload: "/public/uploads/brands/",
  },
};
