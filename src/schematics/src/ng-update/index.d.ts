import { Rule } from '@angular-devkit/schematics';
import { NgUpdateOptions } from './schema';
export declare function updateToV11(options: NgUpdateOptions): Rule;
/** Post-update schematic to be called when update is finished. */
export declare function postUpdate(): Rule;
