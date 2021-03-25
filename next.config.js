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

    serverUrl: "https://back.xolodnoeleto.ru",
    // serverUrl: "http://back.projects-backend.ru",

    catalogProducts: "/api/getProducts",
    catalogCategories: "/api/getCategories",
    getProduct: "/api/getProduct",
    getFilters: "/api/getFilterData",
    searchProduct: "/api/searchProduct",
    makeOrder: "/api/checkout",
    callbackRequest: "api/oneClickOrder",
    contactUs: "/api/contactUs",
    getBrands: "/api/getBrands",
    addReview: "/api/review",
    getNewProducts: "/api/newProducts",
    getReviews: "/api/getReviews",
    getCertificates: "api/getCertificates",

    productsUpload: "/uploads/products/products0",
    brandsUpload: "/uploads/manufacturer_logo/size800",
    seriesUpload: "/uploads/product_series/product_series0",
    certificateUpload: "uploads/manufacturer_certificate",
  },
};
