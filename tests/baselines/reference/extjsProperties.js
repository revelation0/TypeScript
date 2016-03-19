//// [extjsProperties.ts]
namespace Test {
    export class TestClass {
        get testProp(): String {
            return "testprop";
        }
        set testProp(prop: String) {
        }
        get secondProp(): number {
            return 2;
        }
        set secondProp(prop: number) {
        }
    }
}


//// [extjsProperties.js]
var Test;
(function (Test) {
    var TestClass = Ext.define('Test.TestClass', {
    }, function(TestClass) {
        Object.defineProperty(TestClass.prototype, "testProp", {
            get: function () {
                return "testprop";
            },
            set: function (prop) {
            },
            enumerable: true,
            configurable: true
        });
    });
})(Test || (Test = {}));
