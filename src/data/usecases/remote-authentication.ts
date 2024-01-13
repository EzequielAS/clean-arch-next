import { UnauthorizedError, UnexpectedError } from '@/domain/errors'
import { DataToAuthModel } from '@/domain/models'
import { UserAuth } from '@/domain/usecases'
import { RemoteAuthToken } from '../models'
import { HttpClient, HttpStatusCode } from '../protocols/http'

export class RemoteAuthentication implements UserAuth {
	constructor(
		private readonly url: string,
		private readonly httpClient: HttpClient<RemoteAuthentication.Model>,
	) {}

	async auth(data: DataToAuthModel): Promise<UserAuth.Model> {
		const userData = JSON.stringify(data)

		const httpResponse = await this.httpClient.request({
			url: this.url,
			method: 'post',
			body: userData,
			headers: {
				'Content-Type': 'application/json',
			},
		})

		const token = httpResponse.body?.token ?? ''

		switch (httpResponse.statusCode) {
			case HttpStatusCode.ok:
				return { token }

			case HttpStatusCode.unauthorized:
				throw new UnauthorizedError()

			default:
				throw new UnexpectedError()
		}
	}
}

export namespace RemoteAuthentication {
	export type Model = RemoteAuthToken
}
