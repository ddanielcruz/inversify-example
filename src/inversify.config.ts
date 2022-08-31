import { Container } from 'inversify'

import './abstract'
import './entities'
import { buildProviderModule } from 'inversify-binding-decorators'

const container = new Container()
container.load(buildProviderModule())

export { container }
