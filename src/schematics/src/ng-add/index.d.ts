/**
 * Schematic to automatically add support for using @ngx-i18nsupport.
 * Will be called when you call 'ng add @ngx-i18nsupport/tooling'.
 */
import { Rule } from '@angular-devkit/schematics';
import { NgAddOptions } from './schema';
export declare function ngAdd(optionsFromCommandline: NgAddOptions): Rule;
