"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var safe_1 = require("colors/safe");
exports.OPTIONS_DEFINITIONS = [
    { name: 'help', alias: 'h', type: Boolean },
    { name: 'name', type: String },
    { name: 'spec', type: String },
    { name: 'directory', type: String },
    { name: 'folder-name', type: String },
    { name: 'plopfile', type: String }
];
exports.PARSE_OPTIONS = {
    camelCase: true,
    stopAtFirstUnknown: true
};
exports.HEADER = "\n\n  \u2593\u2588\u2593\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2588\u2588\u2591   \u2593\u2588\u2592\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591  \u2591\u2592\u2592\u2592\u2592\u2592\u2588\u2588\u2591 \u2591\u2588\u2588\u2592\u2592\u2592\u2592\u2592\u2591  \u2591\u2588\u2588\u2593\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2591\n \u2591\u2588\u2591\u2591\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2591\u2591\u2588  \u2591\u2588\u2591\u2592\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588  \u2591\u2588\u2588\u2588\u2588\u2588\u2591\u2592\u2588 \u2588\u2593\u2591\u2588\u2588\u2588\u2588\u2588\u2592  \u2588\u2588 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2593\n \u2591\u2588 \u2593\u2588        \u2588\u2591\u2591\u2588  \u2591\u2588 \u2593\u2593                  \u2591\u2588\u2591\u2592\u2588 \u2588\u2593\u2591\u2588\u2591      \u2588\u2588 \u2588\u2591\n \u2591\u2588 \u2593\u2588        \u2588\u2591\u2591\u2588  \u2591\u2588 \u2593\u2593                  \u2591\u2588\u2591\u2592\u2588\u2591\u2588\u2593\u2591\u2588\u2591      \u2588\u2588 \u2588\u2591\n \u2591\u2588 \u2593\u2588        \u2588\u2591\u2591\u2588  \u2591\u2588 \u2593\u2593   \u2591\u2593\u2593\u2593\u2593\u2593\u2593\u2588\u2588      \u2591\u2588\u2591\u2591\u2593\u2593\u2593\u2591\u2591\u2588\u2591      \u2593\u2588 \u2591\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2588\u2588\u2588\n \u2591\u2588 \u2593\u2588        \u2588\u2591\u2591\u2588  \u2591\u2588 \u2593\u2593   \u2591\u2588\u2588\u2588\u2588\u2588\u2591\u2591\u2588      \u2591\u2588\u2591\u2591\u2588\u2588\u2588\u2592\u2591\u2588\u2591       \u2592\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 \u2588\u2592\n \u2591\u2588 \u2593\u2588        \u2588\u2591\u2591\u2588  \u2591\u2588 \u2593\u2593       \u2591\u2588\u2591\u2591\u2588      \u2591\u2588\u2591\u2592\u2588 \u2588\u2593\u2591\u2588\u2591                  \u2593\u2588 \u2588\u2593\n \u2591\u2588 \u2593\u2588        \u2588\u2591\u2591\u2588  \u2591\u2588 \u2593\u2593       \u2591\u2588\u2591\u2591\u2588      \u2591\u2588\u2591\u2592\u2588 \u2588\u2593\u2591\u2588\u2591                  \u2593\u2588 \u2588\u2593\n \u2591\u2588 \u2593\u2588        \u2588\u2591\u2591\u2588  \u2591\u2588\u2591\u2591\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2593 \u2591\u2588  \u2591\u2588\u2588\u2588\u2588\u2593 \u2593\u2588 \u2588\u2588 \u2593\u2588\u2588\u2588\u2588\u2592  \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2592\u2591\u2588\u2592\n \u2591\u2588 \u2593\u2588        \u2588\u2591\u2591\u2588   \u2591\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588  \u2591\u2588\u2588\u2588\u2588\u2588\u2588\u2593   \u2592\u2588\u2588\u2588\u2588\u2588\u2588\u2592  \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2591\n\n";
exports.HELP_SECTIONS = [
    {
        content: safe_1.cyan(exports.HEADER),
        raw: true
    },
    {
        header: 'NGXS CLI',
        content: [
            '$ ngxs {bold --name} {underline name} {bold --spec} {underline boolean} {bold --directory} {underline path} {bold --folder-name} {underline name}',
            '$ ngxs {bold --help}'
        ]
    },
    {
        header: 'Options',
        optionList: [
            {
                name: safe_1.cyan('name'),
                typeLabel: '{underline name}',
                description: 'Store name'
            },
            {
                name: safe_1.cyan('directory'),
                typeLabel: '{underline path}',
                description: 'By default, the prompt is set to the current directory'
            },
            {
                name: safe_1.cyan('folder-name'),
                typeLabel: '{underline name}',
                description: 'Use your own folder name, default: state'
            },
            {
                name: safe_1.cyan('spec'),
                typeLabel: '{underline boolean}',
                description: 'Creates a spec file for store, default: true'
            }
        ]
    },
    {
        header: 'Custom template generator',
        content: ['$ ngxs {bold --plopfile} {underline path}']
    }
];
//# sourceMappingURL=command-line.config.js.map