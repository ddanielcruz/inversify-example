import { Container } from 'inversify'

import { TYPES } from './types'
import { Warrior, Weapon, ThrowableWeapon } from './interfaces'
import { Ninja, Katana, Shuriken } from './entities'
import { Business, Service, IService } from './abstract'

const container = new Container()
container.bind<Warrior>(TYPES.Warrior).to(Ninja)
container.bind<Weapon>(TYPES.Weapon).to(Katana)
container.bind<ThrowableWeapon>(TYPES.ThrowableWeapon).to(Shuriken)
container.bind(IService).to(Service)
container.bind(Business).toSelf()

export { container }
