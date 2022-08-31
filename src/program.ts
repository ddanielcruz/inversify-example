import 'reflect-metadata'

import { container } from './inversify.config'
import { Business } from './abstract'
import { Warrior } from './interfaces'
import { TYPES } from './types'

const ninja: Warrior = container.get(TYPES.Warrior)
console.log(ninja.fight())

const business = container.get(Business)
business.service.process()
