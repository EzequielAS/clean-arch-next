import { cookies } from 'next/headers'
import { decryptString } from '../crypto-string/decrypt-string'
import { encryptString } from '../crypto-string/encrypt-string'

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

		const decryptedCookieName = decryptString(cookieName)

		if (decryptedCookieName === name) {
			return cookieValue
		}
	}

	return null
}

function getServerCookie(name: string) {
	const encryptedCookieName = encryptString(name)

	const userCookie = cookies().get(encryptedCookieName)?.value

	if (userCookie) {
		return userCookie
	}

	return null
}
