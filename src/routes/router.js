const router = require('express').Router();
const testRoutes = require("./test/test");

router.use('/', testRoutes);

module.exports = router;