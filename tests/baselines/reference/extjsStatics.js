//// [extjsStatics.ts]
namespace Test {
    export class TestClass {
        static val:String = "test";
        public static method() {
        }
        private static privateMethod() {
        }
    }
}


//// [extjsStatics.js]
var Test;
(function (Test) {
    var TestClass = Ext.define('Test.TestClass', {
        statics: {
            val: "test",
            method: function () {
            },
            privateMethod: function () {
            },
        },
    });
})(Test || (Test = {}));
