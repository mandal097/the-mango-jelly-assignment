const Comic = require('../../models/comicModel');

const router = require('express').Router();

// fetching details of the particular comic book with its id

//endpoint
//http://localhost:5000/api/v1/comic-details/:comicId


router.get('/:comicId', async (req, res) => {
    const { comicId } = req.params;

    try {
        const data = await Comic.findOne({ _id: comicId });
        return res.json({
            status: 200,
            result: 'success',
            data: data
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