/** 
 * The Creator class declares the factory method that is suposed to return an 
 * object of a Product class.
 */
abstract class Creator {

    public abstract factoryMethod(): Product;

    public someOperation(): string {
        const product = this.factoryMethod();
        return `Creator: The same creator's code has just worked with ${product.operation()}`;
    }
}

/**
 * Concrete Creators override the factory method in order to change the
 * resulting product type 
 */
class ConcreteCreator1 extends Creator {

    public factoryMethod(): Product {
        return new ConcreteProduct1();
    }
}

class ConcreteCreator2 extends Creator {

    public factoryMethod(): Product {
        return new ConcreteProduct2();
    }
}

/**
 * The product interface declares the operations that all concrete products must
 * implement
 */
interface Product {
    operation(): string;
}

/**
 * Concrete Products provide various implementations of the product inteface
 */
class ConcreteProduct1 implements Product {
    public operation(): string {
        return `{Result of the concret operation 1}`;
    }
}

class ConcreteProduct2 implements Product {
    public operation(): string {
        return `{Result of the concret operation 2}`;
    }
}

/**
 * The client code works with an instance of a concrete creator
 */
function clientCode(creator: Creator) {
    console.log(`Client: I'm not aware of the criator's class, but it still works.`);
    console.log(creator.someOperation());
}

/**
 * An application picks a creator's type depending on the configuration or
 * environment
 */
console.log(`App: lauched with the ConcreteCreator1`);
clientCode(new ConcreteCreator1());
console.log('');

console.log(`App: lauched with the ConcreteCreator2`);
clientCode(new ConcreteCreator2());
console.log('');
