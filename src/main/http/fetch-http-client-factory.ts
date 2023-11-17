import { FetchHttpClient } from '@/infra/http'

export const makeFetchHttpClient = (): FetchHttpClient => new FetchHttpClient()
