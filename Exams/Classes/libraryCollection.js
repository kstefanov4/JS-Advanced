class LibraryCollection {
    constructor (capacity, books) {
        this.capacity = capacity;
        this.books = [];
    }

    addBook (bookName, bookAuthor){
        if (this.books.length + 1 > this.capacity){
            throw new Error("Not enough space in the collection.");
        } 

        this.books.push({bookName, bookAuthor, payed: false});
        return `The ${bookName}, with an author ${bookAuthor}, collect.`;
    };

    payBook( bookName ){
        let book = this.books.find(x => x.bookName == bookName);

        if (book == undefined){
            throw new Error(`${bookName} is not in the collection.`);
        }
        if (book.payed){
            throw new Error(`${bookName} has already been paid.`);
        }

        book.payed = true;
        return `${bookName} has been successfully paid.`;
    };

    removeBook(bookName){
        let book = this.books.find(x => x.bookName == bookName);

        if (book == undefined){
            throw new Error(`The book, you're looking for, is not found.`);
        }

        if (!book.payed){
            throw new Error(`${bookName} need to be paid before removing from the collection.`);
        }

        let bookIndex = this.books.indexOf(book);
        this.books.splice(bookIndex,1);
        return `${bookName} remove from the collection.`;
    };

    getStatistics(bookAuthor){
        if (bookAuthor == undefined){
            let result = '';
            result += `The book collection has ${this.capacity - this.books.length} empty spots left.`;

            for (const book of this.books.sort((a,b) => a.bookName.localeCompare(b.bookName))) {
                result += `\n${book.bookName} == ${book.bookAuthor} - ${book.payed ? `Has Paid.` : `Not Paid.`}`
            }
            return result;
        }else{
            let book = this.books.find(x => x.bookAuthor == bookAuthor);

            if (book == undefined){
                throw new Error(`${bookAuthor} is not in the collection.`);
            }

            return `${book.bookName} == ${book.bookAuthor} - ${book.payed ? `Has Paid` : `Not Paid.`}`
        }
    }
}

const library = new LibraryCollection(5)
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics());
