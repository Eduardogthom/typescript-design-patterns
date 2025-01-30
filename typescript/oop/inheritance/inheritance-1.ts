class Animal {
    constructor(public name: string) { }

    move(distance: number): void {
        console.log(`${this.name} moved ${distance} meters.`);
    }
}

class Dog extends Animal {
    constructor(name: string = 'Dog') {
        super(name);
    }

}

let myDog = new Dog('Bilu');
myDog.move(10);