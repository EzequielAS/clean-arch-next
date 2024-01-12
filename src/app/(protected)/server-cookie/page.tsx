import { FetchHttpClient } from '@/infra/http'
import { cookies } from 'next/headers'

export default async function ServerCookieRoute() {
	const fetcher = new FetchHttpClient({ next: { revalidate: 60 * 3 } })
	const cookieName = String(process.env.COOKIE_NAME)

	const userCookie = cookies().get(cookieName)?.value

	const data = await fetcher.request({
		url: `${process.env.NEXT_PUBLIC_AUTH_URL}/server-cookie`,
		method: 'get',
		headers: {
			Cookie: `${cookieName}=${userCookie}`,
		},
	})

	const results = JSON.stringify(data.body.results)

	return <h1>{results}</h1>
}
