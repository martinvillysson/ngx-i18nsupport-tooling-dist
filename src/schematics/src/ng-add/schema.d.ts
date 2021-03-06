/**
 * Options that can be used with ng add @ngx-i18nsupport.
 */
import { CommonOptions } from '../common';
export interface NgAddOptions extends CommonOptions {
    localePath?: string;
    i18nFormat?: string;
    i18nLocale?: string;
    languages?: string;
    useCommandlineForLanguages?: boolean;
    skipInstall?: boolean;
    useXliffmergeBuilder?: boolean;
}
