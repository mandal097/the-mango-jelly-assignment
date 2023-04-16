const Comic = require('../../models/comicModel');

const router = require('express').Router();


// creating new comic 

//endpoint
//http://localhost:5000/api/v1/create-new-comic

router.post('', async (req, res) => {
    const {
        book_name,
        author_name,
        published_year,
        price,
        discount,
        page_count,
        condition
    } = req.body;

    if (!book_name || !author_name || !published_year || !price || !discount || !page_count || !condition) {
        return res.json({
            status: 400,
            result: 'err',
            message: 'Please fill all inputs'
        })
    }

    try {
        const comic = new Comic({
            book_name,
            author_name,
            published_year,
            price,
            discount,
            page_count,
            condition
        });

        const savedComic = await comic.save();

        res.json({
            status: 201,
            result: 'success',
            message: 'Successfully created comic',
            data: savedComic
        })

    } catch (error) {
        res.json({
            status: 500,
            result: 'err',
            message: 'Something went wrong'
        })
    }

})

module.exports = router;