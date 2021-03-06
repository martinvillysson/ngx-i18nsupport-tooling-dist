/**
 * Options that can be used with ng addLanguage.
 */
import { CommonOptions } from '../common';
export interface AddLanguageOptions extends CommonOptions {
    language?: string;
    languages?: string;
}
