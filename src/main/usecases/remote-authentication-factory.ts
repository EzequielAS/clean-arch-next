import { RemoteAuthentication } from '@/data/usecases/remote-authentication'
import { makeFetchHttpClient } from '../http'

export const makeRemoteAuthentication = () =>
	new RemoteAuthentication('http://localhost:3333/login', makeFetchHttpClient())
