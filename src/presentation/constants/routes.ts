export enum ROUTES_ENUM {
	LOGIN = '/login',
	HOME = '/home',
	MOVIE = '/movie',
	SERVER_COOKIE = '/server-cookie',
}

export const routes = {
	[ROUTES_ENUM.LOGIN]: {
		isProtected: false,
	},
	[ROUTES_ENUM.HOME]: {
		isProtected: true,
	},
	[ROUTES_ENUM.MOVIE]: {
		isProtected: true,
	},
	[ROUTES_ENUM.SERVER_COOKIE]: {
		isProtected: true,
	},
}
