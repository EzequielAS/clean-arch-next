import { encryptString } from '../crypto-string/encrypt-string'

export function setCookie(cookie: string) {
	const cookieName = encryptString(process.env.NEXT_PUBLIC_COOKIE_NAME ?? '')
	const cookieValue = cookie
	const maxAgeOneYear = 1000 * 60 * 60 * 24 * 365

	const cookieString = `${cookieName}=${cookieValue}; max-age=${maxAgeOneYear}; secure; SameSite=Strict; path=/`

	document.cookie = cookieString
}
