export declare const PLOP_GENERATOR_NAME = "ngxs-cli";
export declare const DEFAULT_CONFIG = "../plop-helpers/plopfile.js";
export declare const DEFAULT_USAGE_SPEC: boolean;
export interface Changes {
    type: string;
    path: string;
}
export interface Failures {
    type: string;
    error: string;
}
export interface GeneratorResults {
    changes: Changes[];
    failures: Failures[];
}
