TypeScript ExtJS Module
=======================

A fork of Typescript 1.7 that emits classes in a way that ExtJS understands.

##Why?

The Javascript emitted by the Typescript compiler is not compatible with the ExtJS class system. 
ExtJS requires classes to be defined using syntax like `Ext.define(CLASSNAME, MEMBERS);` but Typescript 
emits code based around prototypes.

This forked compiler emits code that looks just like the ExtJS classes you would write in regular Javascript.

##ExtJS API Type Declarations

To get the most use out of this compiler you will also need some type declarations (*.d.ts files) for the ExtJS API. 
There is a companion project to provide these: https://github.com/revelation0/typescript-declarations-for-ext

##Caveats

There are a few things to know when writing typescript to use with this emitter:
  * Only exported classes are emitted using the Ext.define syntax.
  * Because only export classes are emitted with Ext.define any class extending an Ext class MUST be exported.
  * Because Ext.define always defines in the global scope any differences in visibility with the modules containing
   the exported class are ignored for those classes. If you have non-exported classes with limited visibility they
   will still be properly accessible to the Ext class.

##Use

To use simply target the "extjs" module type:

```node path/to/this/tsc.js -m extjs <source>```

##Known Issues

  * Accessors are not currently implemented.  This has to do with the way they are emitted they would need to be moved
   to the constructor most likely, I will look into that more in the future but not a feature we are utilizing so not
   a high priority.
  * Classes not in modules will not be emitted correctly. Classes in the global scope do not contain the export flag
   even if they are defined that way.

##Compatability

This project is compatible with Typescript 1.7 and ExtJS 5.

##Thanks

This project was inspired by (but not a fork of) https://github.com/fabioparra/TypeScriptExtJSEmitter/ 