import { injectable } from 'inversify'
import { provide } from 'inversify-binding-decorators'

@injectable()
export abstract class IService {
  abstract process(): void
}

@provide(IService)
export class Service extends IService {
  process(): void {
    console.log('Processing...')
  }
}

@provide(Business)
export class Business {
  constructor(public service: IService) {}
}
