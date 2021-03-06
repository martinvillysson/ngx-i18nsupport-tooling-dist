/**
 An Angular Builder to run xliffmerge.
 Work is based on nice blog article
 https://medium.com/dailyjs/angular-cli-6-under-the-hood-builders-demystified-f0690ebcf01 by Evgeny Barabanov
**/
import { Observable } from 'rxjs';
import { BuilderContext, BuilderOutput } from '@angular-devkit/architect';
import { XliffmergeBuilderSchema } from './schema';
import { ProgramOptions, IConfigFile } from '@ngx-i18nsupport/ngx-i18nsupport';
export declare class XliffmergeBuilder {
    private context;
    constructor(context: BuilderContext);
    run(builderConfig: Partial<XliffmergeBuilderSchema>): Observable<BuilderOutput>;
    createProgramOptionsFromConfig(builderConfig: Partial<XliffmergeBuilderSchema>): ProgramOptions;
    createProfileContentFromConfig(builderConfig: Partial<XliffmergeBuilderSchema>): IConfigFile | undefined;
    private adjustPathToWorkspaceRoot;
}
export default XliffmergeBuilder;
