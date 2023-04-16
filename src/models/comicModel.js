const mongoose = require('mongoose');

const comicSchema = mongoose.Schema({
    book_name: {
        type: String,
        required: true,
    },
    author_name: {
        type: String,
        required: true,
    },
    published_year: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    discount: {
        type: Number,
        required: true,
    },
    page_count: {
        type: Number,
        required: true,
    },
    condition: {
        type: String,
        required: true,
    }

},
    { timestamps: true }
)


const Comic = new mongoose.model('Comic', comicSchema);

module.exports = Comic