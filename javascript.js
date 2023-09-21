
let myLibrary=[];




function Book(title, author,pages,read) {                //the constructor function
    this.title = title;
    this.author = author;
    this.pages=pages;
    this.read=read;
    this.information=function(){
        return((this.title) +" by "+this.author + "it has" + this.pages + "it was" + this.read);
    };

};




function addBookToLibrary() {
    const title1=prompt("what is the title of the book");
    const author1=prompt("what is author of book");
    const pages1=prompt("how many pages is it");
    const read1=prompt("was it read");
   
    const Booked=new Book(title1,author1,pages1,read1);
    myLibrary.push(Booked);

    booksLibrary();
 };



 function booksLibrary(){

    for (let i = 0; i <=5; i++) {
        console.log(myLibrary[i]);
      };
      

 };



const newBook=document.querySelector('.newBook');
newBook.addEventListener('click',addBookToLibrary);

  

  
  