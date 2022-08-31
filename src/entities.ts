import { inject, injectable } from 'inversify'
import { ThrowableWeapon, Warrior, Weapon } from './interfaces'
import { TYPES } from './types'

@injectable()
export class Katana implements Weapon {
  public hit() {
    return 'cut!'
  }
}

@injectable()
export class Shuriken implements ThrowableWeapon {
  public throw() {
    return 'hit!'
  }
}

@injectable()
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
