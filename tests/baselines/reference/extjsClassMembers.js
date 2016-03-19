//// [extjsClassMembers.ts]
namespace Test {
    export class TestClass {
        private privateVal: String = "private";
        public publicVal: String = "public";
        public publicMethod() {
        }
        private privateMethod() {
        }
    }
}


//// [extjsClassMembers.js]
var Test;
(function (Test) {
    var TestClass = Ext.define('Test.TestClass', {
        privateVal: "private",
        publicVal: "public",
        publicMethod: function () {
        },
        privateMethod: function () {
        },
    });
})(Test || (Test = {}));
