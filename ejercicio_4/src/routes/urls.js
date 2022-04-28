const { Router } = require("express");
const router = Router();

const urls = require("../sample.json");
//console.log(urls);

router.get("/", (req, res) => {
  res.json(urls);
});

router.get("/urlShort", (req, res) => {
  let dateNow = new Date();
  let exists = false;
  for (let i = 0; i < urls.length; i++) {
    if (urls[i].urlShort == req.query.receivedShortUrl) {
      exists = true;
      let dateUrl = new Date(urls[i].createdAt);
      days = Math.round(Math.abs(dateNow - dateUrl) / (1000 * 3600 * 24));
      if (days > 180) res.send("Your link is expired");
      else res.redirect(`${urls[i].urlLarge}`)
    }
  }
  if (!exists) res.send("The short url sent is not found in the database");
});

router.get("/urlLarge", (req, res) => {
  let dateNow = new Date();
  let exists = false;
  for (let i = 0; i < urls.length; i++) {
    if (urls[i].urlLarge == req.query.receivedLargeUrl) {
      exists = true;
      let dateUrl = new Date(urls[i].createdAt);
      days = Math.round(Math.abs(dateNow - dateUrl) / (1000 * 3600 * 24));
      if (days > 180) res.send("Your link is expired");
      else res.send(urls[i].urlShort);
    }
  }
  if (!exists) res.send("The large url sent is not found in the database");
});

router.post("/", (req, res) => {
  if (req.body.urlLarge && req.body.urlLarge != "") {
    let nextId = urls.length + 1;
    
    let newUrlSave = {
      "id": nextId,
      "urlLarge": req.body.urlLarge,
      "urlShort": `https://short.pj/${nextId}`,
      "createdAt": new Date().toString()
    };
    urls.push(newUrlSave);
    res.send(`saved url, this is your short url: ${newUrlSave.urlShort}`);
  } else {
    res.send("The url is not present, or is empty");
  }
})

module.exports = router;