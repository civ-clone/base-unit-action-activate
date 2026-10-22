import ActivateRule from '@civ-clone/core-unit/Rules/Activate';
import Activate from '../Activate';
import Effect from '@civ-clone/core-rule/Effect';
import Generator from '@civ-clone/core-world-generator/Generator';
import Player from '@civ-clone/core-player/Player';
import RuleRegistry from '@civ-clone/core-rule/RuleRegistry';
import Terrain from '@civ-clone/core-terrain/Terrain';
import Tile from '@civ-clone/core-world/Tile';
import Unit from '@civ-clone/core-unit/Unit';
import World from '@civ-clone/core-world/World';
import { expect } from 'chai';

describe('Activate', (): void => {
  it("runs the ruleset's `Activate` rules for the unit", (): void => {
    const ruleRegistry = new RuleRegistry(),
      tile = new Tile(0, 0, new Terrain(), new World(new Generator(1, 1))),
      unit = new Unit(null, new Player(ruleRegistry), tile, ruleRegistry),
      activated: Unit[] = [];

    ruleRegistry.register(
      new ActivateRule(new Effect((unit: Unit) => activated.push(unit)))
    );

    new Activate(tile, tile, unit, ruleRegistry).perform();

    expect(activated).to.deep.equal([unit]);
  });
});
