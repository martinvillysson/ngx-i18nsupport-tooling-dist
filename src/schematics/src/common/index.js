"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addXliffmergeDependencyToPackageJson = exports.serveConfigurationForLanguage = exports.buildConfigurationForLanguage = exports.isValidLanguageSyntax = exports.xliffmergeBuilderSpec = exports.xliffmergeBuilderName = exports.extractScriptName = exports.defaultI18nLocale = exports.defaultI18nFormat = exports.xliffmergePackage = exports.xliffmergeVersion = void 0;
const tslib_1 = require("tslib");
var constants_1 = require("./constants");
Object.defineProperty(exports, "xliffmergeVersion", { enumerable: true, get: function () { return constants_1.xliffmergeVersion; } });
Object.defineProperty(exports, "xliffmergePackage", { enumerable: true, get: function () { return constants_1.xliffmergePackage; } });
Object.defineProperty(exports, "defaultI18nFormat", { enumerable: true, get: function () { return constants_1.defaultI18nFormat; } });
Object.defineProperty(exports, "defaultI18nLocale", { enumerable: true, get: function () { return constants_1.defaultI18nLocale; } });
Object.defineProperty(exports, "extractScriptName", { enumerable: true, get: function () { return constants_1.extractScriptName; } });
Object.defineProperty(exports, "xliffmergeBuilderName", { enumerable: true, get: function () { return constants_1.xliffmergeBuilderName; } });
Object.defineProperty(exports, "xliffmergeBuilderSpec", { enumerable: true, get: function () { return constants_1.xliffmergeBuilderSpec; } });
var common_functions_1 = require("./common-functions");
Object.defineProperty(exports, "isValidLanguageSyntax", { enumerable: true, get: function () { return common_functions_1.isValidLanguageSyntax; } });
Object.defineProperty(exports, "buildConfigurationForLanguage", { enumerable: true, get: function () { return common_functions_1.buildConfigurationForLanguage; } });
Object.defineProperty(exports, "serveConfigurationForLanguage", { enumerable: true, get: function () { return common_functions_1.serveConfigurationForLanguage; } });
Object.defineProperty(exports, "addXliffmergeDependencyToPackageJson", { enumerable: true, get: function () { return common_functions_1.addXliffmergeDependencyToPackageJson; } });
tslib_1.__exportStar(require("./options-after-setup"), exports);
tslib_1.__exportStar(require("./workspace-snapshot"), exports);
tslib_1.__exportStar(require("./package-json-snapshot"), exports);
//# sourceMappingURL=index.js.map