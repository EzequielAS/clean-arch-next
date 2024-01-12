import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { ROUTES_ENUM, routes } from './presentation/constants/routes'

const appUrl = process.env.APP_URL ?? ''
const cookieName = process.env.COOKIE_NAME ?? ''

const protectedRoutes = Object.entries(routes)
	.filter(([_, value]) => value.isProtected)
	.map(([key, _]) => key)

export function middleware(request: NextRequest) {
	const path = request.nextUrl.pathname
	const cookie = request.cookies.get(cookieName)

	const isCurrentRouteProtected = protectedRoutes.some((route) =>
		path.includes(route),
	)

	if (!cookie && isCurrentRouteProtected) {
		return NextResponse.redirect(`${appUrl + ROUTES_ENUM.LOGIN}`)
	}

	if (cookie && !isCurrentRouteProtected) {
		return NextResponse.redirect(`${appUrl + ROUTES_ENUM.HOME}`)
	}

	return NextResponse.next()
}

export const config = {
	matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
