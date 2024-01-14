import { makeRemoteAuthentication } from '@/main/usecases/remote-authentication-factory'
import { ROUTES_ENUM } from '@/presentation/constants/routes'
import { setCookie } from '@/presentation/utils/cookie/setCookie'
import { getErrorMessage } from '@/presentation/utils/getErrorMessage'
import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'

export function useAuth() {
	const [isAuthLoading, setIsAuthLoading] = useState(false)

	const { push } = useRouter()

	async function login(event: FormEvent<HTMLFormElement>) {
		event.preventDefault()

		const formData = new FormData(event.currentTarget)
		const email = String(formData.get('email'))
		const password = String(formData.get('password'))
		const userData = { email, password }

		try {
			setIsAuthLoading(true)

			const { token } = await makeRemoteAuthentication().auth(userData)

			setCookie(token)
			push(ROUTES_ENUM.HOME)
			setIsAuthLoading(false)
		} catch (error) {
			setIsAuthLoading(false)
			alert(getErrorMessage(error))
		}
	}

	return {
		login,
		isLoading: isAuthLoading,
	}
}
