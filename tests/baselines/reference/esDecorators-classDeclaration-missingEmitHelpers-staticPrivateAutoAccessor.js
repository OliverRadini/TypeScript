//// [tests/cases/conformance/esDecorators/classDeclaration/esDecorators-classDeclaration-missingEmitHelpers-staticPrivateAutoAccessor.ts] ////

//// [main.ts]
export {}

declare var dec: any;

// needs: __esDecorate, __runInitializers, __setFunctionName
class C {
    @dec static accessor #x: any;
}

//// [tslib.d.ts]
export {}


//// [main.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
// needs: __esDecorate, __runInitializers, __setFunctionName
let C = (() => {
    let _staticExtraInitializers = [];
    let _static_private_x_decorators;
    let _static_private_x_initializers = [];
    let _static_private_x_descriptor;
    return class C {
        static {
            _static_private_x_decorators = [dec];
            tslib_1.__esDecorate(this, _static_private_x_descriptor = { get: tslib_1.__setFunctionName(function () { return this.#x_accessor_storage; }, "#x", "get"), set: tslib_1.__setFunctionName(function (value) { this.#x_accessor_storage = value; }, "#x", "set") }, _static_private_x_decorators, { kind: "accessor", name: "#x", static: true, private: true }, _static_private_x_initializers, _staticExtraInitializers);
            tslib_1.__runInitializers(this, _staticExtraInitializers);
        }
        static #x_accessor_storage = tslib_1.__runInitializers(this, _static_private_x_initializers, void 0);
        static get #x() { return _static_private_x_descriptor.get.call(this); }
        static set #x(value) { return _static_private_x_descriptor.set.call(this, value); }
    };
})();
