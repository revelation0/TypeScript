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
        static get staticProp(): string {
            return "static";
        }
        static set staticProp(prop: string) {
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
        Object.defineProperty(TestClass.prototype, "secondProp", {
            get: function () {
                return 2;
            },
            set: function (prop) {
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TestClass, "staticProp", {
            get: function () {
                return "static";
            },
            set: function (prop) {
            },
            enumerable: true,
            configurable: true
        });
    });
})(Test || (Test = {}));
