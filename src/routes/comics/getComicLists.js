const Comic = require('../../models/comicModel');

const router = require('express').Router();

// fetching all the list of available comics in database

// endpoint 
// http://localhost:5000/api/v1/comic-lists

router.get('', async (req, res) => {
    try {
        const list = await Comic.find();
        return res.json({
            status: 200,
            result: 'success',
            data: list
        })
    } catch (error) {
        return res.json({
            status: 500,
            result: 'err',
            message: 'Something went wrong'
        })

    }
})

module.exports = router;