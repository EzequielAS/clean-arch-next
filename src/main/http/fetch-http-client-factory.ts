import { FetchHttpClient } from '@/infra/http'
import { NextFetchConfig } from '@/infra/models'

export const makeFetchHttpClient = (
	aditionalFetchConfig?: NextFetchConfig,
): FetchHttpClient => new FetchHttpClient<NextFetchConfig>(aditionalFetchConfig)
