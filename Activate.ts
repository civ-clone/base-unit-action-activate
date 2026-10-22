import Action from '@civ-clone/core-unit/Action';

// Wakes a unit that's asleep, fortified or busy with something else, as an order like any other: what waking it does is
//  the ruleset's `Activate` rules (`core-unit/Rules/Activate`), which `Unit#activate` runs (civ-clone/web-renderer#160).
export class Activate extends Action {
  perform(): void {
    this.unit().activate();
  }
}

export default Activate;
