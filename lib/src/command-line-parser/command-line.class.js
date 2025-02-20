"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var commandLineArgs = require("command-line-args");
var commandLineUsage = require("command-line-usage");
var command_line_config_1 = require("./command-line.config");
var safe_1 = require("colors/safe");
var CommandLine = /** @class */ (function () {
    function CommandLine() {
    }
    CommandLine.parse = function (definitions) {
        return __awaiter(this, void 0, void 0, function () {
            var argv;
            return __generator(this, function (_a) {
                argv = commandLineArgs(definitions, command_line_config_1.PARSE_OPTIONS);
                this.argv = this.validate(argv);
                return [2 /*return*/, this.argv];
            });
        });
    };
    CommandLine.help = function () {
        console.log(commandLineUsage(command_line_config_1.HELP_SECTIONS));
        process.exit();
    };
    CommandLine.setArgument = function (key, value) {
        var argv = [];
        var withoutIndex = null;
        process.argv.forEach(function (val, index) {
            if (val === key) {
                withoutIndex = index + 1;
            }
            else if (index !== withoutIndex) {
                argv.push(val);
            }
        });
        argv.push(key, value);
        process.argv = argv;
    };
    CommandLine.validate = function (argv) {
        var UNKNOWN_COMMAND = argv['_unknown'];
        if (UNKNOWN_COMMAND) {
            var errorMessage = safe_1.red('[ERROR]:') + " UNKNOWN_COMMAND " + JSON.stringify(UNKNOWN_COMMAND);
            throw new Error(errorMessage);
        }
        return argv;
    };
    return CommandLine;
}());
exports.CommandLine = CommandLine;
//# sourceMappingURL=command-line.class.js.map