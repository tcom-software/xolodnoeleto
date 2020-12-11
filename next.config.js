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

    productsUpload: "/public/uploads/products/",
    seriesUpload: "/public/uploads/product_series/",
    brandsUpload: "/public/uploads/brands/",
  },
};
