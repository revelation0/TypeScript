//// [extjsClass.ts]
namespace Test {
    export class TestClass {
    }
}


//// [extjsClass.js]
var Test;
(function (Test) {
    var TestClass = Ext.define('Test.TestClass', {
    });
})(Test || (Test = {}));
