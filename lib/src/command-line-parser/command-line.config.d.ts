import { CommandLineDefinitions } from './command-line.interface';
export declare const OPTIONS_DEFINITIONS: CommandLineDefinitions;
export declare const PARSE_OPTIONS: {
    camelCase: boolean;
    stopAtFirstUnknown: boolean;
};
export declare const HEADER = "\n\n  ▓█▓▒▒▒▒▒▒▒▒▒▒██░   ▓█▒░░░░░░░░░░░░░  ░▒▒▒▒▒██░ ░██▒▒▒▒▒░  ░██▓▒▒▒▒▒▒▒▒▒▒▒▒░\n ░█░░██████████░░█  ░█░▒█████████████  ░█████░▒█ █▓░█████▒  ██ █████████████▓\n ░█ ▓█        █░░█  ░█ ▓▓                  ░█░▒█ █▓░█░      ██ █░\n ░█ ▓█        █░░█  ░█ ▓▓                  ░█░▒█░█▓░█░      ██ █░\n ░█ ▓█        █░░█  ░█ ▓▓   ░▓▓▓▓▓▓██      ░█░░▓▓▓░░█░      ▓█ ░▓▓▓▓▓▓▓▓▓███\n ░█ ▓█        █░░█  ░█ ▓▓   ░█████░░█      ░█░░███▒░█░       ▒████████████ █▒\n ░█ ▓█        █░░█  ░█ ▓▓       ░█░░█      ░█░▒█ █▓░█░                  ▓█ █▓\n ░█ ▓█        █░░█  ░█ ▓▓       ░█░░█      ░█░▒█ █▓░█░                  ▓█ █▓\n ░█ ▓█        █░░█  ░█░░█████████▓ ░█  ░████▓ ▓█ ██ ▓████▒  █████████████▒░█▒\n ░█ ▓█        █░░█   ░███████████████  ░██████▓   ▒██████▒  ███████████████░\n\n";
export declare const HELP_SECTIONS: ({
    content: string;
    raw: boolean;
    header?: undefined;
    optionList?: undefined;
} | {
    header: string;
    content: string[];
    raw?: undefined;
    optionList?: undefined;
} | {
    header: string;
    optionList: {
        name: string;
        typeLabel: string;
        description: string;
    }[];
    content?: undefined;
    raw?: undefined;
})[];
