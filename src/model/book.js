const mongoose= require('mongoose')
const Schema=mongoose.Schema;

const booksSchema=new Schema({
   name:{type:String,required:true},
   authar: {type: String, required: true}
});

const Book=mongoose.model('Books',booksSchema);

module.exports = Book;

