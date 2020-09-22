"use strict";
/**
 * Collection of utility functions used in schematics.
 * (mainly copied from @ngrx schematics)
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringUtils = exports.NodeDependencyType = exports.getPackageJsonDependency = exports.addPackageJsonDependency = exports.getWorkspacePath = exports.getWorkspace = exports.getProject = exports.parseName = void 0;
const strings_1 = require("./utility/strings");
const special_strings_1 = require("./utility/special-strings");
var parse_name_1 = require("./utility/parse-name");
Object.defineProperty(exports, "parseName", { enumerable: true, get: function () { return parse_name_1.parseName; } });
var project_1 = require("./utility/project");
Object.defineProperty(exports, "getProject", { enumerable: true, get: function () { return project_1.getProject; } });
var config_1 = require("./utility/config");
Object.defineProperty(exports, "getWorkspace", { enumerable: true, get: function () { return config_1.getWorkspace; } });
Object.defineProperty(exports, "getWorkspacePath", { enumerable: true, get: function () { return config_1.getWorkspacePath; } });
var dependencies_1 = require("./utility/dependencies");
Object.defineProperty(exports, "addPackageJsonDependency", { enumerable: true, get: function () { return dependencies_1.addPackageJsonDependency; } });
Object.defineProperty(exports, "getPackageJsonDependency", { enumerable: true, get: function () { return dependencies_1.getPackageJsonDependency; } });
Object.defineProperty(exports, "NodeDependencyType", { enumerable: true, get: function () { return dependencies_1.NodeDependencyType; } });
exports.stringUtils = {
    dasherize: strings_1.dasherize,
    decamelize: strings_1.decamelize,
    camelize: strings_1.camelize,
    classify: strings_1.classify,
    underscore: strings_1.underscore,
    capitalize: strings_1.capitalize,
    commaseparatedToArrayString: special_strings_1.commaseparatedToArrayString,
    toArrayString: special_strings_1.toArrayString
};
//# sourceMappingURL=index.js.map