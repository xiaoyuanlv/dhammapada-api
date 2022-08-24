const express = require('express');
const router = express.Router();
const dhamma = require('../services/dhamma');

// Get Dhamma Listing
router.get('/category/:id', function(req, res, next) {
  try {
   const id = req.params.id != '' ? Number(req.params.id) : 0;
   res.json(dhamma.getDhammaList(id)); 
  } catch(err) {
    console.error(`Error while getting dhamma `, err.message);
    next(err);
  }
});

router.get('/:id', function(req, res, next) {
  try {
   const id = req.params.id != '' ? Number(req.params.id) : 0;
   res.json(dhamma.getDhamma(id)); 
  } catch(err) {
    console.error(`Error while getting dhamma `, err.message);
    next(err);
  }
});

// Get Dhamma Listing
router.get('/', function(req, res, next) {
  try {
   const page = req.query.page != undefined ? Number(req.query.page) : 1;
   res.json(dhamma.getDhammaByPage(page)); 
  } catch(err) {
    console.error(`Error while getting dhamma list `, err.message);
    next(err);
  }
});

module.exports = router;