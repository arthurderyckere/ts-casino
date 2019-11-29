"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = __importDefault(require("commander"));
function init() {
    console.log("=====started=====");
}
var program = new commander_1.default.Command();
program
    .version('0.0.1')
    .description('An application for pizzas ordering')
    .option('-p, --peppers', 'Add peppers')
    .option('-P, --pineapple', 'Add pineapple')
    .option('-b, --bbq', 'Add bbq sauce')
    .option('-c, --cheese <type>', 'Add the specified type of cheese', 'marble')
    .option('-C, --no-cheese', 'You do not want any cheese')
    .parse(process.argv);
init();
