import { cookies } from 'next/headers'

const isClient = typeof window !== 'undefined'

export function getCookie(name: string) {
	if (isClient) {
		return getClientCookie(name)
	}

	return getServerCookie(name)
}

function getClientCookie(name: string) {
	const cookies = document.cookie.split(';')

	for (const cookie of cookies) {
		const [cookieName, cookieValue] = cookie.trim().split('=')

		if (cookieName === name) {
			return decodeURIComponent(cookieValue)
		}
	}

	return null
}

function getServerCookie(name: string) {
	const userCookie = cookies().get(name)?.value ?? null

	return userCookie
}
