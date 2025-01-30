class Product {
    constructor(
        public id: string,
        public price: number,
        public description: string
    ) { }

    display(): void {
        console.log(`Product: ${this.id}, ${this.price}, ${this.description}`);
        console.log('-------------------');
    }
}

class Book extends Product {
    constructor(
        id: string,
        price: number,
        description: string,
        public author: string,
        public title: string
    ) {
        super(id, price, description);
    }

    display(): void {
        super.display();
        console.log(`Book: ${this.id}, ${this.price}, ${this.description}`);
        console.log(`Author: ${this.author}, Title: ${this.title}`);
    }
}

class Eletronic extends Product {
    constructor(
        id: string,
        price: number,
        description: string,
        public brand: string,
        public model: string
    ) {
        super(id, price, description);
    }

    display(): void {
        super.display();
        console.log(`Eletronic: ${this.id}, ${this.price}, ${this.description}`);
        console.log(`Brand: ${this.brand}, Model ${this.model}`);
    }
}

let book: Book = new Book('1', 200, 'Lorem Ipsum', 'Marcos Pasquim', 'Harry Potter');
let eletronic: Eletronic = new Eletronic('2', 1000, 'Lorem Ipsum', 'Apple', 'iPhone 12');

book.display();
console.log('------------------------------------');
eletronic.display();
console.log('------------------------------------');

