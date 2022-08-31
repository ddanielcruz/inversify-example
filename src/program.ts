import 'reflect-metadata'

import { container } from './inversify.config'
import { Warrior } from './interfaces'
import { TYPES } from './types'

const ninja: Warrior = container.get(TYPES.Warrior)
console.log(ninja.fight())
