
let myLibrary=[];




function Book(title,author,pages,read) {                //the constructor function
    this.title = title;
    this.author = author;
    this.pages=pages;
    this.read=read;
    this.information=function(){
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;

    };

};




function addBookToLibrary() {
    const title1=document.getElementById('title').value;
    const author1=document.getElementById('author').value;

    const pages1=document.getElementById('pages').value;
    const read1=document.getElementById('status').value;
   
    const Booked=new Book(title1,author1,pages1,read1);
    myLibrary.push(Booked);


    
    displayBookCard(Booked);

};


 function displayBookCard(book) {
    const libraryDiv = document.getElementById('library');

    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');

    const bookInfo = document.createElement('p');
    bookInfo.textContent = book.information();
    bookCard.appendChild(bookInfo);

    libraryDiv.appendChild(bookCard);



    const bookDel= document.createElement('button');
    bookDel.classList.add('delBook');
    bookCard.appendChild(bookDel);




}









 function booksLibrary(){

    for (let i = 0; i <=myLibrary.length; i++) {
        console.log(myLibrary[i]);
      };
      

 };



const newBook=document.querySelector('.submit');
newBook.addEventListener('click',addBookToLibrary);

  

  
  