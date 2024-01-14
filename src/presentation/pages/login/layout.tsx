import { LoginLayoutProps } from './types'

import styles from './login.module.css'

export function LoginLayout({ handleLogin, isLoading }: LoginLayoutProps) {
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

				<button
					type="submit"
					className={styles['submit-button']}
					disabled={isLoading}
				>
					LOGIN
				</button>
			</form>
		</div>
	)
}
