import { RemoteAuthentication } from '@/data/usecases/remote-authentication'
import { makeFetchHttpClient } from '../http'

export const makeRemoteAuthentication = () =>
	new RemoteAuthentication(
		`${String(process.env.NEXT_PUBLIC_AUTH_URL)}/login`,
		makeFetchHttpClient(),
	)
