//// [defaultExportsGetExportedSystem.ts]
export default class Foo {}


//// [defaultExportsGetExportedSystem.js]
System.register([], function(exports_1) {
    "use strict";
    var Foo;
    return {
        setters:[],
        execute: function() {
            class Foo {
            }
            exports_1("default", Foo);
        }
    }
});
