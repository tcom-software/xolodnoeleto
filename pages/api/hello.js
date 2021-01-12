// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.statusCode = 200;
  res.json({ name: "John Doe" });
};

/*
const parseString = require("xml2js").parseString;

export default (req, res) => {
  console.log(req.body, "------[]][][][");
  const xml = "<root>Hello xml2js!</root>";
  parseString(xml, function (err, result) {
    console.dir(result, "------");
  });
};
*/
