export class UnexpectedError extends Error {
  constructor () {
    super('Something wrong. Try again later.')
    this.name = 'UnexpectedError'
  }
}
