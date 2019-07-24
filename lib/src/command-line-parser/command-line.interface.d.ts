export interface ArgumentOptions {
    name: string;
    type: object | any;
    alias: string;
}
export declare type CommandLineDefinitions = Array<Partial<ArgumentOptions>>;
export interface Argv {
    help: boolean;
    name: string;
    spec: string;
    directory: string;
    folderName: string;
    plopfile: string;
}
export declare type ArgvTable = Partial<Argv>;
