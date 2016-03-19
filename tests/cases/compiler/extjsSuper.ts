// @module: ExtJS
namespace Test {
    export class BaseClass {
        constructor() {
        }
        method(arg1: String, arg2: String) {
        }
    }
    export class TestClass extends BaseClass {
        constructor() {
            super();
        }
        method(arg1: String, arg2: String) {
            super.method(arg1, arg2);
        }
    }
}
