
let myLibrary=[];




function Book(title,author,pages,read) {                //the constructor function
    this.title = title;
    this.author = author;
    this.pages=pages;
    this.read=read;
    this.information=function(){
        return((this.title,this.author,this.pages,this.read));
    };

};




function addBookToLibrary() {
    const title1=document.getElementById('title').value;
    const author1=document.getElementById('author').value;

    const pages1=document.getElementById('pages').value;
    const read1=document.getElementById('status').value;
   
    const Booked=new Book(title1,author1,pages1,read1);
    myLibrary.push(Booked);

    booksLibrary();
 };



 function booksLibrary(){

    for (let i = 0; i <=myLibrary.length; i++) {
        console.log(myLibrary[i]);
      };
      

 };



const newBook=document.querySelector('.submit');
newBook.addEventListener('click',addBookToLibrary);

  

  
  