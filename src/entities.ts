import { inject } from 'inversify'
import { provide } from 'inversify-binding-decorators'

import { ThrowableWeapon, Warrior, Weapon } from './interfaces'
import { TYPES } from './types'

@provide(TYPES.Weapon)
export class Katana implements Weapon {
  public hit() {
    return 'cut!'
  }
}

@provide(TYPES.ThrowableWeapon)
export class Shuriken implements ThrowableWeapon {
  public throw() {
    return 'hit!'
  }
}

@provide(TYPES.Warrior)
export class Ninja implements Warrior {
  constructor(
    @inject(TYPES.Weapon) private readonly katana: Weapon,
    @inject(TYPES.ThrowableWeapon) private readonly shuriken: ThrowableWeapon
  ) {}

  public fight() {
    return this.katana.hit()
  }

  public sneak() {
    return this.shuriken.throw()
  }
}
