import { FormEvent } from 'react'

export interface LoginLayoutProps {
	handleLogin(event: FormEvent<HTMLFormElement>): Promise<void>
	isLoading: boolean
}
