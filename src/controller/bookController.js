const bookService= require('../services/bookServices');

postController = async (req,res) => {
    
    try {
        bookService.create(req.body);
        res.status(201).json('book is added');

    } catch(error) {
        console.log(error)
        res.status(400).json('book not added');
        
    }
}
module.exports = { postController};