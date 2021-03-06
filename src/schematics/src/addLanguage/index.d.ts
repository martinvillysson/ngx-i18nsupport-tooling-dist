/**
 * Schematic to add one or more additional languages to a project using @ngx-i18nsupport.
 */
import { Rule } from '@angular-devkit/schematics';
import { AddLanguageOptions } from './schema';
/**
 * The schematic factory addLanguage.
 * @param optionsFromCommandline contains the languages to be added.
 */
export declare function addLanguage(optionsFromCommandline: AddLanguageOptions): Rule;
