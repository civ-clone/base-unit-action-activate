# base-unit-action-activate

`Activate`: waking a unit that's asleep, fortified or busy with something else, as an order like any other
(civ-clone/web-renderer#160). Its `perform` calls `Unit#activate`, which runs the ruleset's `Activate` rules
(`core-unit/Rules/Activate`): those decide what waking a unit does, such as taking its fortification off.

A ruleset offers it through a `core-unit/Rules/Action` rule, as `civ1-unit` does for a busy or fortified unit on its own
square.
