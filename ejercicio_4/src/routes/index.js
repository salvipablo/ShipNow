const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.json({
    "id": 1,
    "title": "Hello World",
    "data": 365
  });
});

router.get("/test", (req, res) => {
  let data = {
    "id": 2,
    "title": "Test",
    "data": 0
  };
  
  res.json(data);
});

module.exports = router;