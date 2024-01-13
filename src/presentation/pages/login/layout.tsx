'use client'

import { makeRemoteAuthentication } from '@/main/usecases/remote-authentication-factory'
import { ROUTES_ENUM } from '@/presentation/constants/routes'
import { getErrorMessage } from '@/presentation/utils/getErrorMessage'
import { useRouter } from 'next/navigation'
import { FormEvent } from 'react'

import { setCookie } from '@/presentation/utils/setCookie'
import styles from './login.module.css'

export function LoginLayout() {
	const { push } = useRouter()

	async function handleLogin(event: FormEvent<HTMLFormElement>) {
		event.preventDefault()

		const formData = new FormData(event.currentTarget)
		const email = String(formData.get('email'))
		const password = String(formData.get('password'))
		const userData = { email, password }

		try {
			const { token } = await makeRemoteAuthentication().auth(userData)

			setCookie(token)

			push(ROUTES_ENUM.HOME)
		} catch (error) {
			alert(getErrorMessage(error))
		}
	}

	return (
		<div className={styles['login-page-content']}>
			<form className={styles['form-login']} onSubmit={handleLogin}>
				<input
					className={styles['input-text']}
					placeholder="Email"
					name="email"
				/>
				<input
					className={styles['input-text']}
					placeholder="Password"
					name="password"
				/>

				<button type="submit" className={styles['submit-button']}>
					LOGIN
				</button>
			</form>
		</div>
	)
}
