//// [extjsSuper.ts]
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


//// [extjsSuper.js]
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Test;
(function (Test) {
    var BaseClass = Ext.define('Test.BaseClass', {
        constructor: function () {
        },
        method: function (arg1, arg2) {
        },
    });
    var TestClass = Ext.define('Test.TestClass', {
        extend: 'BaseClass',
        constructor: function () {
            Test.TestClass.superclass.constructor.call(this);
        },
        method: function (arg1, arg2) {
            Test.TestClass.superclass.method.call(this, arg1, arg2);
        },
    });
})(Test || (Test = {}));
