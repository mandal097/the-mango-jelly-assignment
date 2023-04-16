const router = require('express').Router();

router.get('/test', async (req, res) => {
    res.json({
        status: 200,
        message: 'you are on test route'
    })
})

module.exports = router;