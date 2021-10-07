var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * The Creator class declares the factory method that is suposed to return an
 * object of a Product class.
 */
var Creator = /** @class */ (function () {
    function Creator() {
    }
    Creator.prototype.someOperation = function () {
        var product = this.factoryMethod();
        return "Creator: The same creator's code has just worked with " + product.operation();
    };
    return Creator;
}());
/**
 * Concrete Creators override the factory method in order to change the
 * resulting product type
 */
var ConcreteCreator1 = /** @class */ (function (_super) {
    __extends(ConcreteCreator1, _super);
    function ConcreteCreator1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConcreteCreator1.prototype.factoryMethod = function () {
        return new ConcreteProduct1();
    };
    return ConcreteCreator1;
}(Creator));
var ConcreteCreator2 = /** @class */ (function (_super) {
    __extends(ConcreteCreator2, _super);
    function ConcreteCreator2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConcreteCreator2.prototype.factoryMethod = function () {
        return new ConcreteProduct2();
    };
    return ConcreteCreator2;
}(Creator));
/**
 * Concrete Products provide various implementations of the product inteface
 */
var ConcreteProduct1 = /** @class */ (function () {
    function ConcreteProduct1() {
    }
    ConcreteProduct1.prototype.operation = function () {
        return "{Result of the concret operation 1}";
    };
    return ConcreteProduct1;
}());
var ConcreteProduct2 = /** @class */ (function () {
    function ConcreteProduct2() {
    }
    ConcreteProduct2.prototype.operation = function () {
        return "{Result of the concret operation 2}";
    };
    return ConcreteProduct2;
}());
/**
 * The client code works with an instance of a concrete creator
 */
function clientCode(creator) {
    console.log("Client: I'm not aware of the criator's class, but it still works.");
    console.log(creator.someOperation());
}
/**
 * An application picks a creator's type depending on the configuration or
 * environment
 */
console.log("App: lauched with the ConcreteCreator1");
clientCode(new ConcreteCreator1());
console.log('');
console.log("App: lauched with the ConcreteCreator2");
clientCode(new ConcreteCreator2());
console.log('');
