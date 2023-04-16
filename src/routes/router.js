const router = require('express').Router();
const testRoutes = require("./test/test");
const comicsRoutes = require('./comics/_router')

router.use('/test', testRoutes);
router.use('/', comicsRoutes);  // all routes are here regarding COMICS {CRUD}


module.exports = router;