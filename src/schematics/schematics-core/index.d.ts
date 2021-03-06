/**
 * Collection of utility functions used in schematics.
 * (mainly copied from @ngrx schematics)
 */
import { dasherize, decamelize, camelize, classify, underscore, capitalize } from './utility/strings';
import { commaseparatedToArrayString, toArrayString } from './utility/special-strings';
export { parseName } from './utility/parse-name';
export { getProject } from './utility/project';
export { AppConfig, getWorkspace, getWorkspacePath } from './utility/config';
export { addPackageJsonDependency, getPackageJsonDependency, NodeDependency, NodeDependencyType } from './utility/dependencies';
export declare const stringUtils: {
    dasherize: typeof dasherize;
    decamelize: typeof decamelize;
    camelize: typeof camelize;
    classify: typeof classify;
    underscore: typeof underscore;
    capitalize: typeof capitalize;
    commaseparatedToArrayString: typeof commaseparatedToArrayString;
    toArrayString: typeof toArrayString;
};
