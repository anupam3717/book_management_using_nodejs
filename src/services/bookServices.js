const Book=require('../model/book');



async function create(book) {
    return await new Book(book).save();
  }

  module.exports = {


    create

  };