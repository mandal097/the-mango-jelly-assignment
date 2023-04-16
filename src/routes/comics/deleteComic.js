const Comic = require('../../models/comicModel');

const router = require('express').Router();


//this route is for deleting the particular book with its id

// endpoint
// http://localhost:5000/api/v1/comic-delete/:comicId


router.delete('/:comicId', async (req, res) => {
    const { comicId } = req.params;
    try {
        const comic = await Comic.findOne({ _id: comicId });
        if (!comic) {
            return res.json({
                status: 400,
                result: 'err',
                message: 'No record found for this comic Id'
            })
        }

        await comic.deleteOne();
        return res.json({
            status: 200,
            result: 'success',
            message: 'Successfully deleted',
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