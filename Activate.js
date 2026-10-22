"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Activate = void 0;
const Action_1 = require("@civ-clone/core-unit/Action");
// Wakes a unit that's asleep, fortified or busy with something else, as an order like any other: what waking it does is
//  the ruleset's `Activate` rules (`core-unit/Rules/Activate`), which `Unit#activate` runs (civ-clone/web-renderer#160).
class Activate extends Action_1.default {
    perform() {
        this.unit().activate();
    }
}
exports.Activate = Activate;
exports.default = Activate;
//# sourceMappingURL=Activate.js.map