"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var nodePlop = require("node-plop");
var cli_executor_config_1 = require("./cli-executor.config");
var safe_1 = require("colors/safe");
var path_1 = require("path");
var command_line_class_1 = require("../command-line-parser/command-line.class");
var NgxsCliExecutor = /** @class */ (function () {
    function NgxsCliExecutor() {
    }
    /**
     * @description - entry point for execute cli
     * @param argv {ArgvTable}
     */
    NgxsCliExecutor.run = function (argv) {
        var _this = this;
        var name = argv.name, plopfile = argv.plopfile;
        var usageCustomPlopFile = !!plopfile;
        var usageCliWithoutPrompt = !!name;
        if (usageCustomPlopFile) {
            this.execPlop([plopfile]);
        }
        else if (usageCliWithoutPrompt) {
            this.execNodePlop(argv).then(function (result) { return _this.showOutput(result); });
        }
        else {
            this.execPlop([__dirname, cli_executor_config_1.DEFAULT_CONFIG]);
        }
    };
    /**
     * @description run cli with prompt
     * @param pathToPlopfile {string[]} - path relative to the command being run
     * @example: ['./my-plop/plopfile.js']
     */
    NgxsCliExecutor.execPlop = function (pathToPlopfile) {
        command_line_class_1.CommandLine.setArgument('--plopfile', path_1.resolve.apply(void 0, pathToPlopfile));
        require('plop');
    };
    /**
     * @description silent runnable cli (without prompt)
     * @param argv {ArgvTable}
     */
    NgxsCliExecutor.execNodePlop = function (argv) {
        var spec = argv.spec;
        var plopPath = path_1.resolve.apply(void 0, [__dirname, cli_executor_config_1.DEFAULT_CONFIG]);
        var plop = nodePlop(plopPath);
        var generator = plop.getGenerator(cli_executor_config_1.PLOP_GENERATOR_NAME);
        var shouldBeGenerateSpec = spec ? JSON.parse(spec) : cli_executor_config_1.DEFAULT_USAGE_SPEC;
        var cliArgv = __assign({ directory: '.' }, argv, { spec: shouldBeGenerateSpec });
        return generator.runActions(cliArgv);
    };
    /**
     * @description - custom output information
     * @param changes {Changes}
     * @param failures {Failures}
     */
    NgxsCliExecutor.showOutput = function (_a) {
        var changes = _a.changes, failures = _a.failures;
        changes.forEach(function (item) { return console.log(safe_1.green('[SUCCESS]'), item.type, item.path); });
        failures.forEach(function (item) { return console.log(safe_1.red('[FAILED]'), item.type, item.error); });
    };
    return NgxsCliExecutor;
}());
exports.NgxsCliExecutor = NgxsCliExecutor;
//# sourceMappingURL=cli-executor.class.js.map