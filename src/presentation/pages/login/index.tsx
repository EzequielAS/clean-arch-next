'use client'

import { useAuth } from '@/presentation/hooks/useAuth'

import { LoginLayout } from './layout'

export function Login() {
	const { login, isLoading } = useAuth()

	return <LoginLayout handleLogin={login} isLoading={isLoading} />
}
