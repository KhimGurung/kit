const express = require('express');

const router = express.Router();

const home = require('../controllers/HomeController');

// Home page route.
router.get('/', home.home)
	  .get('/our-team', home.our_team)
	  .get('/what-we-do', home.what_we_do)
	  .get('/contact-us', home.contact_us)
	  .get('/we-supply', home.we_supply)
	  .get('/tea-from-nepal', home.tea_from_nepal);

module.exports = router;
