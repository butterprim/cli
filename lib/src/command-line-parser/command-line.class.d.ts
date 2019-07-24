import { ArgvTable, CommandLineDefinitions } from './command-line.interface';
export declare class CommandLine {
    private static argv;
    static parse(definitions: CommandLineDefinitions): Promise<ArgvTable>;
    static help(): void;
    static setArgument(key: string, value: string): void;
    private static validate(argv);
}
