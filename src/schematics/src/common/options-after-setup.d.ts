import { Tree, SchematicContext } from '@angular-devkit/schematics';
export interface CommonOptions {
    path?: string;
    project?: string;
}
/**
 * All relevant option values that are given by input, set by default or read from project.
 */
export interface OptionsAfterSetup {
    path: string;
    project: string;
    isDefaultProject: boolean;
    localePath: string;
    srcDir: string;
    genDir: string;
    i18nFormat: string;
    i18nLocale: string;
    languages?: string;
    parsedLanguages: string[];
    configuredLanguages: string[];
    useComandlineForLanguages: boolean;
    skipInstall?: boolean;
    useXliffmergeBuilder?: boolean;
    profileUsedByBuilder?: string;
}
export declare function setupCommonOptions(optionsFromCommandline: CommonOptions, host: Tree, context: SchematicContext): OptionsAfterSetup;
