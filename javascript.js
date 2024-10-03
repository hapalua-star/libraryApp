
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

Book.prototype.toggleRead = function() {
    this.read = (this.read === 'Read') ? 'Not Read' : 'Read';
    refreshScreen();
};





function addBookToLibrary() {
    const title1=document.getElementById('title').value;
    const author1=document.getElementById('author').value;

    const pages1=document.getElementById('pages').value;
    const read1=document.getElementById('status').value;
   
    const Booked=new Book(title1,author1,pages1,read1);
    myLibrary.push(Booked);


    
    displayBookCard(Booked,myLibrary.length-1);

};


 function displayBookCard(book,index) {
    const libraryDiv = document.getElementById('library');

    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');
    bookCard.setAttribute('data-index',index)

    const bookInfo = document.createElement('p');
    bookInfo.textContent = book.information();
    bookCard.appendChild(bookInfo);

    libraryDiv.appendChild(bookCard);



    const bookDel= document.createElement('button');
    bookDel.classList.add('delBook');
    bookCard.appendChild(bookDel);


    const readButton=document.createElement("button");
    readButton.classList.add("readButton1");
    bookCard.appendChild(readButton);



    bookDel.addEventListener('click',function()
    {deletion(index);
    });


    readButton.addEventListener("click",function()
    {
        book.toggleRead();
        

    })

    
 }



const newBook=document.querySelector('.submit');
newBook.addEventListener('click',addBookToLibrary);


 
 function deletion(index)
 {
    myLibrary.splice(index,1);
    
    refreshScreen();

 }

 function refreshScreen() {
    const libraryDiv = document.getElementById('library');
    libraryDiv.innerHTML = "";  // Properly clears the div
    myLibrary.forEach(function(book, index) {
        displayBookCard(book, index);  // Re-display each book with its index
    });
}
