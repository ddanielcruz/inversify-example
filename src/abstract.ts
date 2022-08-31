import { inject, injectable } from 'inversify'

@injectable()
export abstract class IService {
  abstract process(): void
}

export class Service extends IService {
  process(): void {
    console.log('Processing...')
  }
}

@injectable()
export class Business {
  constructor(@inject(IService) public service: IService) {}
}
