const router = require('express').Router();

router.get('', async (req, res) => {
    res.json({
        status: 200,
        result: 'success',
        message: 'you are on test route'
    })
})

module.exports = router;