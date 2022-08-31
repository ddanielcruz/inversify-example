import 'reflect-metadata'

import { container } from './inversify.config'
import { Warrior } from './interfaces'
import { TYPES } from './types'
import { Business } from './abstract'

const ninja: Warrior = container.get(TYPES.Warrior)
console.log(ninja.fight())

const business = container.get(Business)
business.service.process()
