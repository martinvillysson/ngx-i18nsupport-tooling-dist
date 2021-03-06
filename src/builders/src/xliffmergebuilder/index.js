"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const architect_1 = require("@angular-devkit/architect");
const xliffmerge_builder_1 = require("./xliffmerge.builder");
exports.default = architect_1.createBuilder((options, context) => {
    const xliffmergeBuilder = new xliffmerge_builder_1.default(context);
    return xliffmergeBuilder.run(options).toPromise();
});
//# sourceMappingURL=index.js.map