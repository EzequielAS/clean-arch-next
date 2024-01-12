import { UnauthorizedError, UnexpectedError } from '@/domain/errors'
import { DataToAuth } from '@/domain/models'
import { UserAuth } from '@/domain/usecases'
import { HttpClient, HttpStatusCode } from '../protocols/http'

export class RemoteAuthentication implements UserAuth {
	constructor(
		private readonly url: string,
		private readonly httpClient: HttpClient,
	) {}

	async auth(data: DataToAuth) {
		const userData = JSON.stringify(data)

		const httpResponse = await this.httpClient.request({
			url: this.url,
			method: 'post',
			body: userData,
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json',
			},
		})

		switch (httpResponse.statusCode) {
			case HttpStatusCode.ok:
				return

			case HttpStatusCode.unauthorized:
				throw new UnauthorizedError()

			default:
				throw new UnexpectedError()
		}
	}
}
