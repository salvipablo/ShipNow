const { Router } = require("express");
const router = Router();

const urls = require("../sample.json");
//console.log(urls);

router.get("/", (req, res) => {
  res.json(urls);
});

router.post("/", (req, res) => {
  console.log(req.body);
  res.send("post request received")
})

module.exports = router;