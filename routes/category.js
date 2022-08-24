const express = require('express');
const router = express.Router();
const dhamma = require('../services/dhamma');

/* GET Main listing. */
router.get('/', function(req, res, next) {
  try {
    // req.query.page
    res.json(dhamma.getCategoryList());
  } catch(err) {
    console.error(`Error while getting category `, err.message);
    next(err);
  }
});

// Get Dhamma Listing
router.get('/:id', function(req, res, next) {
    try {
     const id = req.params.id != '' ? Number(req.params.id) : 0;
     res.json(dhamma.getCategory(id)); 
    } catch(err) {
      console.error(`Error while getting category `, err.message);
      next(err);
    }
  });

module.exports = router;