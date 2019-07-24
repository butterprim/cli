import { GeneratorResults } from './cli-executor.config';
import { ArgvTable } from '../command-line-parser/command-line.interface';
export declare class NgxsCliExecutor {
    /**
     * @description - entry point for execute cli
     * @param argv {ArgvTable}
     */
    static run(argv: ArgvTable): void;
    /**
     * @description run cli with prompt
     * @param pathToPlopfile {string[]} - path relative to the command being run
     * @example: ['./my-plop/plopfile.js']
     */
    static execPlop(pathToPlopfile: string[]): void;
    /**
     * @description silent runnable cli (without prompt)
     * @param argv {ArgvTable}
     */
    static execNodePlop(argv: ArgvTable): Promise<GeneratorResults>;
    /**
     * @description - custom output information
     * @param changes {Changes}
     * @param failures {Failures}
     */
    private static showOutput({changes, failures});
}
