const router = require('express').Router();

const createComic = require('./createComic');
const comicLists = require('./getComicLists');
const comicDetails = require('./comicDetails');
const deleteComic = require('./deleteComic');
const updateComic = require('./updateComic');

router.use('/create-new-comic', createComic);
router.use('/comic-lists', comicLists);
router.use('/comic-details', comicDetails);
router.use('/comic-delete', deleteComic);
router.use('/update-comic', updateComic);

module.exports = router;