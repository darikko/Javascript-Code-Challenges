class Book {
    constructor(title, author, ISBN, numCopies) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.numCopies = numCopies;
    }

    // Getter
    get availibility(){
        return this.getAvailability();
    }

    //Method
    getAvailability() {
        if(this.numCopies === 0){
            return "Out of stock";
        } else if (this.numCopies < 10) {
            return "Low stock";
        }
        return "In stock";
    }
}

class TechnicalBook extends Book {
    constructor(title, author, ISBN, numCopies, edition){
        super(title, author, ISBN, numCopies);
        this.edition = edition;
    }

    getEdition() {
        return 'The current version of this book is ${this.edition}.';
    }
}

const CrackingTheCodingInterview = new TechnicalBook(
    "Crackign The Coding Interview",
    "Gayle Laackmann McDowell",
    1209123,
    7,
    "2.3"
);

console.log(CrackingTheCodingInterview.availibility);
console.log(CrackingTheCodingInterview.getEdition());