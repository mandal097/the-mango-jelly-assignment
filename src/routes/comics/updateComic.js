const Comic = require('../../models/comicModel');

const router = require('express').Router();

// updating details of the particular comic book with its id

//endpoint
//http://localhost:5000/api/v1/update-comic/:comicId


router.put('/:comicId', async (req, res) => {
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

        const updatedComic = await Comic.findByIdAndUpdate(comicId, {
            $set: req.body,
        },
            { new: true }
        )
        return res.json({
            status: 200,
            result: 'success',
            message: 'Successfully updated',
            data: updatedComic
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